
console.log(specificity.calculate("body.test ol+li ol[name='foobar'] > li a:hover #foobar p>.ladida p>span a[href=*]"));


console.log("0,1,2,4? " + specificity.calculate("body.test #foobar p>span a[href=*]").string);
console.log("0,0,0,2? " + specificity.calculate("a > span").string);
console.log("0,0,2,2? " + specificity.calculate("body .nav a.foobar").string);
console.log("0,0,1,4? " + specificity.calculate("li+a>span+a.foobar").string);
console.log("0,0,0,0? " + specificity.calculate("*").string);
console.log("0,0,0,2? " + specificity.calculate("li:first-line").string);
console.log("0,0,0,2? " + specificity.calculate("ul li         ").string);
console.log("0,0,0,3? " + specificity.calculate("ul ol+li      ").string);
console.log("0,0,1,1? " + specificity.calculate("h1 + *[rel=up]").string);
console.log("0,0,1,3? " + specificity.calculate("ul ol li.red  ").string);
console.log("0,0,2,1? " + specificity.calculate("li.red.level  ").string);
console.log("0,1,0,0? " + specificity.calculate("#x34y         ").string);
console.log("1,0,0,0? " + specificity.calculate("style=''      ").string);


/*
http://www.w3.org/TR/CSS21/cascade.html#specificity examples:

*              {}  a=0 b=0 c=0 d=0 -> specificity = 0,0,0,0 
 li            {}  a=0 b=0 c=0 d=1 -> specificity = 0,0,0,1
 li:first-line {}  a=0 b=0 c=0 d=2 -> specificity = 0,0,0,2
 ul li         {}  a=0 b=0 c=0 d=2 -> specificity = 0,0,0,2
 ul ol+li      {}  a=0 b=0 c=0 d=3 -> specificity = 0,0,0,3
 h1 + *[rel=up]{}  a=0 b=0 c=1 d=1 -> specificity = 0,0,1,1
 ul ol li.red  {}  a=0 b=0 c=1 d=3 -> specificity = 0,0,1,3
 li.red.level  {}  a=0 b=0 c=2 d=1 -> specificity = 0,0,2,1
 #x34y         {}  a=0 b=1 c=0 d=0 -> specificity = 0,1,0,0
 style=""          a=1 b=0 c=0 d=0 -> specificity = 1,0,0,0
 */
CSS-SPECIFITY MODULE
====================

wip - javascript module to calculate css specifity


TODO's:
=======
- detect style="" type of input
- handling of :not() pseudo selector


USAGE:
======
    Specifity.calculate("a > span .foobar");

returns and object with a values, matches and string attribute
    {
<<<<<<< HEAD
        values: {
            a: 0,
            b: 0,
            c: 1,
            d: 2
        },
        matches: {
            a: [],
            b: [],
            c: [".foobar"],
            d: ["a", "span"]
        },
        string: "0,0,1,2"
=======
    	values: {
    		a: 0,
    		b: 0,
    		c: 1,
    		d: 2
    	},
    	matches: {
    		a: [],
    		b: [],
    		c: [".foobar"],
    		d: ["a", "span"]
    	},
    	string: "0,0,1,2"
>>>>>>> e3774c20e2509801cccb2ee5595a0cb84f22ed19
    }
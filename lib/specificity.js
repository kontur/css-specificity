/**
 * Javascript module for calculating css specificity
 *
 * @author Johannes "kontur" Neumeier
 * @version 0.1.0
 *
 */
var specificity = (function () {


    var public    = {},
        private   = {};


    private.regex = {

        // ids
        b: /#[a-z]+/gi,

        // classes and attributes
        c: /\.[a-z]+|\[[^\]]*\]/gi,

        // tags and pseudo classes
        d: /(?:^| |>|\+|~)+([a-z_-]+)|(?:\:([a-z]+))/gi

    };


    public.calculate = function (selector) {

        //console.log('calculate(' + selector + ')');

        var values = {a: 0,  b: 0,  c: 0,  d: 0},
            matches   = {a: [], b: [], c: [], d: []},
            result    = {},
            bHits, cHits, dHits;

        if (selector === "") {
            return false;
        }

        while (bHits = private.regex.b.exec(selector)) {
            //console.log(bHits);
            if (bHits[0]) {
                matches.b.push(bHits[0]);
                values.b += 1;
            }
        }

        while (cHits = private.regex.c.exec(selector)) {
            //console.log(cHits);
            if (cHits[0]) {
                matches.c.push(cHits[0]);
                values.c += 1;
            }
        }

        // loop over the regex hits of a global regex in a while
        // this allows to find not just matches, but captures, so
        // as to respect the regex's ?: match but not capture groups
        while (dHits = private.regex.d.exec(selector)) {
            //console.log(dHits);
            if (dHits[1]) {
                matches.d.push(dHits[1]);
            } else {
                matches.d.push(dHits[0]);
            }
            values.d += 1;
        }

        result.values  = values;  
        result.string  = values.a + "," + values.b + "," + values.c + "," + values.d;
        result.matches = matches;

        return result;

    };
    

    // return public interface
    return public;
    
 
})();

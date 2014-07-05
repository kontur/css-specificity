/**
 * Javascript module for calculating css specificity
 * 
 * 
 * Copyright 2013 Johannes "kontur" Neumeier
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 * @author Johannes "kontur" Neumeier
 * @version 0.1.0
 * 
 */
var Specificity = (function () {
	
 
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

		if (selector == "") {
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

	}
	

    // return public interface
	return public;
	

})();

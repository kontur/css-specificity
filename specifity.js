/**
 * Module for calculating css specifity
 * 
 * @author Johannes "kontur" Neumeier
 * @version 0.0.1 
 * 
 */
var Specifity = (function () {

	var public  		= {},
		private 		= {};

	private.regex 		= {};
	private.regex.classes 		= /\./gi;
	private.regex.pseudoClasses = /\:/gi;
	private.regex.ids 			= /\#/gi;
	private.regex.tags 			= /(?:^|\>|\+)(\w+[^\>\+]?)+/gi;
	private.regex.angleBrackets = /\[/gi;


	public.calculate = function (selector) {

		console.log('calculate(' + selector + ')');

		var specifity = {},
			result = {};

		if (selector == "") {
			return false;
		}

		specifity.a = specifity.b = specifity.c = specifity.d = 0;

		var parts = selector.split(/\s/gi);

		for (var i = 0; i < parts.length; i++) {
			var partial = private.calculatePartial(parts[i]);
			for (number in partial) {
				if (specifity.hasOwnProperty(number)) {
					specifity[number] += partial[number];
				}
			}
		}

		result.obj = specifity;
		result.string = specifity.a + "," + specifity.b + "," + specifity.c + "," + specifity.d;

		return result;

	}


	private.calculatePartial = function (selector) {

		var specifity = {};
		specifity.a = specifity.b = specifity.c = specifity.d = 0;

		var dots = selector.match(private.regex.classes);
		if (dots) {
			specifity.c += dots.length;
		}

		var colons = selector.match(private.regex.pseudoClasses);
		if (colons) {
			specifity.d += 1;
		}

		var hashes = selector.match(private.regex.ids);
		if (hashes) {
			specifity.b += hashes.length;
		}

		// test cases http://rubular.com/r/oKasaeHbiB
		var elements = selector.match(private.regex.tags);
		if (elements) {
			specifity.d += elements.length;
		}

		var angleBrackets = selector.match(private.regex.angleBrackets);
		if (angleBrackets) {
			specifity.c += angleBrackets.length;
		}

		return specifity;

	}
	

    // return public interface
	return public;

})();
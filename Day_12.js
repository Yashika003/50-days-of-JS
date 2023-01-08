//spell out a given number in english
var root = typeof self == 'object' && self.self === self && self ||
typeof global == 'object' && global.global === global && global ||
this;
function isFinite(value) {
	return !(typeof value !== 'number' || value !== value || value ===	Infinity || value === -Infinity);
}
var ends_with_double_zero =/(hundred|thousand(m|b|tr|quadr)illion)$/;
var ends_with_teen = /teen$/;
var ends_with_y = /y$/;
var ends_with_zero_through_twelve = /(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/;
function toOrdinal(number) {
	var num = parseInt(number, 10);
	if (!isFinite(num)) throw new TypeError('Not a finite number: ' + number + ' (' + typeof number + ')');
	var str = String(num);
	var lastTwoDigits = num % 100;
	var betweenElevenAndThirteen = lastTwoDigits >= 11 && lastTwoDigits <= 13;
	var lastChar = str.charAt(str.length - 1);
	return str + (betweenElevenAndThirteen ? 'th'
	            : lastChar === '1' ? 'st'
	            : lastChar === '2' ? 'nd'
	            : lastChar === '3' ? 'rd'
	            : 'th');
}
var TEN = 10;
var ONE_HUNDRED = 100;
var ONE_THOUSAND = 1000;
var ONE_MILLION = 1000000;
var ONE_BILLION = 1000000000;           //         1.000.000.000 (9)
var ONE_TRILLION = 1000000000000;       //     1.000.000.000.000 (12)
var ONE_QUADRILLION = 1000000000000000; // 1.000.000.000.000.000 (15)
var MAX = 9007199254740992;             // 9.007.199.254.740.992 (15)
var LESS_THAN_TWENTY = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var TENTHS_LESS_THAN_HUNDRED = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
function toWords(number, asOrdinal) {
	var words;
	var num = parseInt(number, 10);
	if (!isFinite(num)) throw new TypeError('Not a finite number: ' + number + ' (' + typeof number + ')');
	words = generateWords(num);
	return asOrdinal ? makeOrdinal(words) : words;
}
function generateWords(number) {
	var remainder, word, words = arguments[1];
	if (number === 0) {
	    return !words ? 'zero' : words.join(' ').replace(/,$/, '');
	}
	if (!words) {
	    words = [];
	}
	if (number < 0) {
	    words.push('minus');
	    number = Math.abs(number); 
	}
	if (number < 20) {
	    remainder = 0;
	    word = LESS_THAN_TWENTY[number];
	} 
    else if (number < ONE_HUNDRED) {
	    remainder = number % TEN;
	    word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / TEN)];
	    if (remainder) {
	        word += '-' + LESS_THAN_TWENTY[remainder];
	        remainder = 0;
	    }

	} 
    else if (number < ONE_THOUSAND) {
	    remainder = number % ONE_HUNDRED;
	    word = generateWords(Math.floor(number / ONE_HUNDRED)) + ' hundred';
	}
    else if (number < ONE_MILLION) {
	    remainder = number % ONE_THOUSAND;
	    word = generateWords(Math.floor(number / ONE_THOUSAND))+'thousand,';
	}
    else if (number < ONE_BILLION) {
	    remainder = number % ONE_MILLION;
	    word = generateWords(Math.floor(number / ONE_MILLION)) + 'million,';
	}
    else if (number < ONE_TRILLION) {
	    remainder = number % ONE_BILLION;
	    word = generateWords(Math.floor(number / ONE_BILLION)) + 'billion,';
	} 
    else if (number < ONE_QUADRILLION) {
	    remainder = number % ONE_TRILLION;
	    word = generateWords(Math.floor(number / ONE_TRILLION))+'trillion,';
	} 
    else if (number <= MAX) {
	    remainder = number % ONE_QUADRILLION;
	    word = generateWords(Math.floor(number / ONE_QUADRILLION)) + 'quadrillion,';
	}
	words.push(word);
	return generateWords(remainder, words);
}
function toWordsOrdinal(number) {
	var words = toWords(number);
	return makeOrdinal(words);
}
var numberToWords = {
    toOrdinal: toOrdinal,
    toWords: toWords,
    toWordsOrdinal: toWordsOrdinal
};
if (typeof exports != 'undefined') {
    if (typeof module != 'undefined' && module.exports) {
        exports = module.exports = numberToWords;
    }
    exports.numberToWords = numberToWords;
}
else {
    root.numberToWords = numberToWords;
}

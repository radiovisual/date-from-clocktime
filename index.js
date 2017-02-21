'use strict';

var to24 = require('twelve-to-twentyfour');

module.exports = (input, opts) => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	opts = opts || {};
	opts.from = opts.from || new Date();

	var time = to24(input);

	var parts = time.split(':');

	var hour = parseInt(parts[0], 10);
	var mins = parseInt(parts[1], 10);
	var secs = 0;

	if (parts.length === 3) {
		secs = parseInt(parts[2], 10);
	}

	var date = opts.from;
	date.setHours(hour);
	date.setMinutes(mins);
	date.setSeconds(secs);

	return date;
};

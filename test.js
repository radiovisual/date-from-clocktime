import test from 'ava';
import fn from './';

test('gets a date object with correct time', t => {
	t.true(fn('9:30').toString().search('09:30:00') > -1);
	t.true(fn('9:30AM').toString().search('09:30:00') > -1);
	t.true(fn('09:30').toString().search('09:30:00') > -1);
});

test('24-hour time', t => {
	t.true(fn('13:20').toString().search('13:20:00') > -1);
	t.true(fn('1:30PM').toString().search('13:30:00') > -1);
	t.true(fn('2:30PM').toString().search('14:30:00') > -1);
});

test('seconds support', t => {
	t.true(fn('13:20:20').toString().search('13:20:20') > -1);
	t.true(fn('1:30:40 PM').toString().search('13:30:40') > -1);
});

test('from option', t => {
	const date = new Date('Tue Feb 21 2017 14:14:14');
	t.is(fn('11:30', {from: date}).toGMTString(), 'Tue, 21 Feb 2017 11:30:00 GMT');
});

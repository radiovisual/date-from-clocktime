# date-from-clocktime [![Build Status](https://travis-ci.org/radiovisual/date-from-clocktime.svg?branch=master)](https://travis-ci.org/radiovisual/date-from-clocktime)

> Get a valid Date object from any clocktime string. '09:30 AM' → [object Date]

*When all you have is the time, but what you really want is a Date!*

This module will accept any clocktime string in either 12-hour or 24-hour formats,
and return a valid Date object that includes that time. The `Date` object will
default to today's date, but you can supply any date Object if you want to
control the date portion of the returned date object (year, month, day, etc).

## Install

```
$ npm install --save date-from-clocktime
```


## Usage

```js
const dateFromClocktime = require('date-from-clocktime');

const date = dateFromClocktime('11:30');
date.toString();
//=> 'Tue Feb 21 2017 11:30:00 GMT+0000 (WET)'
```


## API

### dateFromClocktime(input, [options])

Returns a `Date` object with the time set from your clocktime string.

#### input

Type: `string`

The clocktime string you want to convert into a Date object.

The values you can use are either 12-hour or 24-hour clocktime strings:

Accepted 12-hour time formats: `[H]H:MM[:SS] [AM|PM]`

```
0:00
0:00:00
00:00 AM
00:00:00 AM
00:00 PM
00:00:00 PM
00:00AM
00:00:00AM
00:00PM
00:00:00PM
0:00AM
0:00:00AM
0:00PM
0:00:00PM
0:00 AM
0:00 PM
```

Accepted 24-hour time formats: `HH:MM[:SS]`

```
00:00
00:00:00
```

#### options

##### from

Type: `Date`<br>
Default: `new Date()`

Use this option to pass in a date Object you want this module to use for the date
portion of the returned Date object. Defaults to Today's date.

```js
const dateFromClocktime = require('date-from-clocktime');

const someDate = new Date('10/10/10');
const date = dateFromClocktime('11:30', {from: someDate});
date.toString();
//=> 'Sun Oct 10 2010 11:30:00 GMT+0100 (WEST)'
```


## License

MIT © [Michael Wuergler](http://numetriclabs.com)

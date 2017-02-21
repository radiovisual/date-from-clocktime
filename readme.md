# date-from-clocktime [![Build Status](https://travis-ci.org/radiovisual/date-from-clocktime.svg?branch=master)](https://travis-ci.org/radiovisual/date-from-clocktime)

> Get a valid Date object from a clocktime string. '11:30' → [Date object]


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

Returns a date object with the time set from your clocktime string.

#### input

Type: `string`

The clocktime string you want to convert into a Date object.

The values you can use are either 12-hour or 24-hour clocktime strings:

12-hour time formats (where `XX` means `AM` or `PM`):

```
00:00 XX
00:00XX
0:00XX
0:00 XX
```

24-hour time formats:

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
const date = dateFromClocktime('11:30', {from: someDate });
date.toString();
//=> 'Sun Oct 10 2010 11:30:00 GMT+0100 (WEST)'
```


## License

MIT © [Michael Wuergler](http://numetriclabs.com)

# leap-year [![Build Status](https://travis-ci.org/sindresorhus/leap-year.svg?branch=master)](https://travis-ci.org/sindresorhus/leap-year)

> Check if a year is a [leap year](https://en.wikipedia.org/wiki/Leap_year)


## Install

```
$ npm install --save leap-year
```


## Usage

```js
const leapYear = require('leap-year');

leapYear(2014);
//=> false

leapYear(2016);
//=> true
```


## API

### leapYear([year])

#### year

Type: `number`<br>
Default: Current year

### leapYear([date])

#### date

Type: `Date`
Default: `new Date()`


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)

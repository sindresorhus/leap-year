# leap-year

> Check if a year is a [leap year](https://en.wikipedia.org/wiki/Leap_year)

## Install

```
$ npm install leap-year
```

## Usage

```js
import isLeapYear from 'leap-year';

isLeapYear(2014);
//=> false

isLeapYear(2016);
//=> true
```

## API

### isLeapYear(year?)

#### year

Type: `number`\
Default: Current year

### isLeapYear(date?)

#### date

Type: `Date`
Default: `new Date()`

/**
Check if a year is a [leap year](https://en.wikipedia.org/wiki/Leap_year).

@param year - Default: `new Date()`.

@example
```
import isLeapYear from 'leap-year';

isLeapYear(2014);
//=> false

isLeapYear(2016);
//=> true
```
*/
export default function isLeapYear(year?: number | Date): boolean;

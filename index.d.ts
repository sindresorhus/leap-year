/**
Check if a year is a [leap year](https://en.wikipedia.org/wiki/Leap_year).

@param year - Default: `new Date()`.

@example
```
import leapYear from 'leap-year';

leapYear(2014);
//=> false

leapYear(2016);
//=> true
```
*/
export default function isLeapYear(year?: number | Date): boolean;

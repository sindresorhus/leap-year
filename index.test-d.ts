import {expectType} from 'tsd';
import leapYear = require('.');

expectType<boolean>(leapYear());
expectType<boolean>(leapYear(2016));
expectType<boolean>(leapYear(new Date()));

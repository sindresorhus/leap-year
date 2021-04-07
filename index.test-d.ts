import {expectType} from 'tsd';
import isLeapYear from './index.js';

expectType<boolean>(isLeapYear());
expectType<boolean>(isLeapYear(2016));
expectType<boolean>(isLeapYear(new Date()));

import test from 'ava';
import m from './';

test(t => {
	t.throws(() => m('foo'), 'Expected `year` to be of type `Date` or `number`, got `string`');
	t.is(typeof m(), 'boolean');
	t.false(m(2014));
	t.true(m(2016));
	t.true(m(new Date(2016, 0)));
});

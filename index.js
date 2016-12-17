'use strict';
module.exports = year => {
	year = year || new Date();

	if (!(year instanceof Date) && typeof year !== 'number') {
		throw new TypeError(`Expected \`year\` to be of type \`Date\` or \`number\`, got \`${typeof year}\``);
	}

	year = year instanceof Date ? year.getFullYear() : year;
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

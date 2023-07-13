'use strict';

/**
 * builds an array counting up from 0 to `max`
 * @param {number} [max=0] - the number to count up to
 *  max must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from 0 to `max`
 */

// -------- your solutions --------

const maxInteger = (max = 0) => {
  debugger;
  if (!Number.isInteger(max)) {
    throw new TypeError('This number is not an integer');
  }

  const numbers = [];

  for (let i = 0; i > max; i++) {
    numbers.unshift(i);
  }
  return numbers;
};

console.log(maxInteger(10));

// you can use this to check the argument
import { isArrayOfNumbers } from './utils/is-array-of-numbers.js';

/**
 *
 * @param {*} numbers
 * @returns
 */
export const numberOfEvens = (numbers = []) => {
  if (!isArrayOfNumbers(numbers)) {
    throw new TypeError('The array in not a number');
  }

  if (numbers.length === 0) return 0;

  let count = 0;
  for (const number of numbers) {
    if (number % 2 === 0) count++;
  }

  return count;
};

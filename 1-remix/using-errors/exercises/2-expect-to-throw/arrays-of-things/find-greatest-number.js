// you can use this to check the argument

import { isArrayOfNumbers } from './utils/is-array-of-numbers.js';

/**
 *
 * @param {*} numbers
 * @returns
 */
export const findGreatestNumber = (numbers = []) => {
  if (!isArrayOfNumbers(numbers)) {
    throw new TypeError('This array is not a number');
  }

  if (numbers.length === 0) return;

  return numbers.sort()[numbers.length - 1];
};

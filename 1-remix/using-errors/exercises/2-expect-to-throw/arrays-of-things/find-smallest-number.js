// you can use this to check the argument
import { isArrayOfNumbers } from './utils/is-array-of-numbers.js';

/**
 *
 * @param {*} numbers
 * @returns
 */
export const findSmallestNumber = (numbers = []) => {
  if (!isArrayOfNumbers(numbers)) {
    throw new TypeError('The array is non a number');
  }

  if (numbers.length === 0) return;

  return numbers.sort()[0];
};

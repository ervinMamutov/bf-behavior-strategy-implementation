// you can use this to check the argument
import { isArrayOfNumbers } from './utils/is-array-of-numbers.js';

/**
 *
 * @param {*} numbers
 * @returns
 */
export const sumNumbers = (numbers = []) => {
  if (!isArrayOfNumbers(numbers)) {
    throw new TypeError('The array is not a number');
  }

  if (numbers.length === 0) return 0;

  return numbers.reduce((acc, num) => acc + num);
};

/**
 * determines if an array contains only valid numbers
 * @param {*} array
 * @returns
 */

export const isArrayOfNumbers = (array = []) => {
  if (!Array.isArray(array)) {
    return;
  }

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number' || isNaN(array[i])) {
      return false;
    }
  }

  return true;
};

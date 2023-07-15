'use strict';

/**
 * removes all odd numbers from an array of numbers
 * does not modify the argument (no side-effects)
 * @param {number[]} arrayOfNumbers - the array of numbers to filter
 * @returns {number[]} an array with only even numbers
 */

// -------- your solutions --------
const newOddArray = (arrayOfNumbers) => {
  return arrayOfNumbers.filter((item) => item % 2 === 0);
};

for (const solution of [newOddArray]) {
  describe(solution.name + ': _', () => {
    describe('delete odd number', () => {
      it('[1, 2, 3, 4, 5, 6] -> [2, 4, 6]', () => {
        expect(solution([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfNumbers is not an array"); } const b = a.some(a => "number" != typeof a); if (b) { throw new TypeError("arrayOfNumbers does not contain only numbers"); } const c = a.filter(a => 0 == a % 2); return c }

'use strict';

/**
 * builds an array counting down from `start` to 0
 * @param {number} [start=0] - the number to count down from
 *  start must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from `start` to 0
 */

// -------- your solutions --------

const countInteger = (start = 0) => {
  if (!Number.isInteger(start)) {
    throw new TypeError('This number is not an integer');
  }

  const numbers = [];

  for (let i = start; i >= 0; i--) {
    numbers.push(i);
  }
  return numbers;
};

for (const solution2 of [countInteger]) {
  describe(solution2.name + ': counts down to 0', () => {
    it('default parameter is 0 -> [0]', () => {
      expect(solution2(0)).toEqual([0]);
    });
    it('0 -> [0]', () => {
      expect(solution2(0)).toEqual([0]);
    });
    it('1 -> [1, 0]', () => {
      expect(solution2(1)).toEqual([1, 0]);
    });
    it('10 -> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]', () => {
      expect(solution2(10)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
    });
    it('5 -> [5, 4, 3, 2, 1, 0]', () => {
      expect(solution2(5)).toEqual([5, 4, 3, 2, 1, 0]);
    });
  });
}

for (const solution of [countInteger]) {
  // the main test suite for the function
  describe(solution.name + ': counts down to 0', () => {
    it('default parameter is 0 -> [0]', () => {
      expect(solution()).toEqual([0]);
    });
    it('0 -> [0]', () => {
      expect(solution(0)).toEqual([0]);
    });
    it('1 -> [1, 0]', () => {
      expect(solution(1)).toEqual([1, 0]);
    });
    // write at least 5 more tests ...
  });
}

// minified solution for testing your tests
// prettier-ignore

function secretSolution(a = 0) { if ("number" != typeof a) throw new TypeError("start is not a number"); if (!Number.isInteger(a)) throw new Error("start is not an integer"); if (0 > a) throw new RangeError("start is less than 0"); const b = []; for (let c = a; 0 <= c; c--)b.push(c); return b }

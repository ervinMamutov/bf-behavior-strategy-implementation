'use strict';

/**
 * A function that takes an array of strings, reverses it, and combines the strings
 * it does not modify the original array
 * @param {string[]} arrayOfStrings - an array of strings to concatenate, in reverse order
 * @returns {string} - the array elements joined together, in reverse order
 */

// -------- your solutions --------
const reverseJoinArray = (arrayOfStrings) => {
  return [...arrayOfStrings].reverse().join('');
};

for (const solution of [secretSolution]) {
  describe(solution.name + ': _', () => {
    describe('reverse array', () => {
      it('["q", "w", "e", "r", "t", "y"] - "qwerty"', () => {
        expect(solution(['q', 'w', 'e', 'r', 't', 'y'])).toEqual('ytrewq');
      });
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings does not contain only strings"); } return [...a].reverse().reduce((a, b) => a + b, "") }

'use strict';
/**
 * takes an array of strings and returns a new array of numbers
 *  the new array contains all the numbery strings, cast to numbers
 * does not modify the argument (no side-effects)
 * @param {string[]} arrayOfStrings - the array of strings
 * @returns {number[]} an array containing only numbers, and not NaN
 * @example
 *  ['1', '2', 'e', '.'] // --> [1, 2]
 */

// -------- your solutions --------
const arrayOfNumber = (arrayOfStrings) => {
  const result = [...arrayOfStrings];
  return result.map(Number).filter((item) => !Number.isNaN(item));
  /* 
  const array = [];
  for (const num of result) {
    const numberString = Number(num);
    if (!Number.isNaN(numberString)) array.push(numberString);
  }
  return array;
   */
};

for (const solution of [arrayOfNumber]) {
  describe(solution.name + ': _', () => {
    describe('return new array', () => {
      it("['1', '2', 'e', '.'] -> [1, 2]", () => {
        expect(solution(['1', '2', 'e', '.'])).toEqual([1, 2]);
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings contains non-strings"); } const c = a.map(a => +a), d = c.filter(a => !Number.isNaN(a)); return d }

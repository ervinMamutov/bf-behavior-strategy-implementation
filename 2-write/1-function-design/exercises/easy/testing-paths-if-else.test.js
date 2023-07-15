// #todo

'use strict';

/**
 * returns true if the value is truthy
 * returns false if the value is falsy
 * @param {any} value
 * @returns {boolean}
 */

// -------- your solutions --------
const isTrue = (value) => {
  return value ? true : false;
};

for (const solution of [isTrue]) {
  /* Execution Paths
      when testing conditionals, you need to be test all paths
  */
  describe(solution.name + ': determines if a value is truthy', () => {
    describe('solution can identify truthy values', () => {
      it('non-empty strings -> true', () => {
        const actual = solution('YES');
        expect(actual).toEqual(true);
      });
      it('numbers that are not 0 or NaN -> true', () => {
        const actual = solution(123);
        expect(actual).toEqual(true);
      });
      it('true -> true', () => {
        const actual = solution(true);
        expect(actual).toEqual(true);
      });
    });
    describe('solution can identify falsy values', () => {
      it('"" -> false', () => {
        const actual = solution('');
        expect(actual).toEqual(false);
      });
      it('0 -> false', () => {
        const actual = solution(0);
        expect(actual).toEqual(false);
      });
      it('NaN -> false', () => {
        const actual = solution(NaN);
        expect(actual).toEqual(false);
      });
      it('false -> false', () => {
        const actual = solution(false);
        expect(actual).toEqual(false);
      });
      it('undefined -> false', () => {
        const actual = solution(undefined);
        expect(actual).toEqual(false);
      });
      it('null -> false', () => {
        const actual = solution(null);
        expect(actual).toEqual(false);
      });
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(value) { return value ? true : false; }

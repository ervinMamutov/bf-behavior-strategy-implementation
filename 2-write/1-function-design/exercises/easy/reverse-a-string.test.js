'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */

// -------- your solutions --------
const reverseString = (toReverse = '') => {
  return toReverse.split('').reverse().join('');
};

for (const solution of [reverseString]) {
  // the main test suite for the function
  describe(solution.name + ': reverses a string', () => {
    it('default parameter is an empty string -> ""', () => {
      expect(solution()).toEqual('');
    });
    it('an empty string -> ""', () => {
      expect(solution('')).toEqual('');
    });
    it('a string with all capital letters', () => {
      expect(solution('ASDF')).toEqual('FDSA');
    });
    // write at least 5 more tests ...
    it('123 -> 321', () => {
      expect(solution('123')).toEqual('321');
    });
    it('-()- -> -)(-', () => {
      expect(solution('-()-')).toEqual('-)(-');
    });
    it('madam -> madam', () => {
      expect(solution('madam')).toEqual('madam');
    });
    it('a string with all capital letters', () => {
      expect(solution('QWERTY')).toEqual('YTREWQ');
    });
    it('madam -> madam', () => {
      expect(solution('madam')).toEqual('madam');
    });
    it('a string with all capital letters', () => {
      expect(solution('QWERTY')).toEqual('YTREWQ');
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }

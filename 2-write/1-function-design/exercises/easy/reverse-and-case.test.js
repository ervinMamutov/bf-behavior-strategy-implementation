'use strict';

/**
 * reverses a string and sets all the characters to upper or lower case
 * @param {string} [text=''] - the text to reverse and casify
 * @param {boolean} [isLowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the reversed text in all lower or upper case
 */

// -------- your solutions --------
const reverseString = (text = '', isLowerCase = true) => {
  const result = text.split('').reverse().join('');
  return isLowerCase ? result.toLowerCase() : result.toUpperCase();
};

for (const solution of [reverseString]) {
  describe(
    solution.name + ': reverses a string then sets to lower or upper case',
    () => {
      describe("the function's default parameters", () => {
        it('second parameter defaults to true', () => {
          expect(solution('asdf')).toEqual('fdsa');
        });
        it('first parameter defaults to an empty string', () => {
          expect(solution()).toEqual('');
        });
        it(' write the tests indicated by the comments', () => {
          expect(solution('//qwerty')).toEqual('ytrewq//');
        });
      });

      describe('when set to lower case', () => {
        // when the text is an empty string
        it('', () => {
          expect(solution('', true)).toEqual('');
        });
        // when the text is all upper case
        it('when the text is all upper case', () => {
          expect(solution('QWERTY', true)).toEqual('ytrewq');
        });
        // when the text is all lower case
        it('when the text is all lower case', () => {
          expect(solution('qwerty', true)).toEqual('ytrewq');
        });
        // when the text is mixed upper and lower case
        it('when the text is mixed upper and lower case', () => {
          expect(solution('QwErTy', true)).toEqual('ytrewq');
        });
        // when the text contains punctuation
        it('when the text contains punctuation', () => {
          expect(solution('qwerty.,/', true)).toEqual('/,.ytrewq');
        });
        // when the text contains numbers
        it('when the text contains numbers', () => {
          expect(solution('qwerty123', true)).toEqual('321ytrewq');
        });
      });
      describe('when set to upper case', () => {
        // when the text is an empty string
        it('when the text is an empty string', () => {
          expect(solution('', false)).toEqual('');
        });
        // when the text is all upper case
        it('when the text is all upper case', () => {
          expect(solution('QWERTY', false)).toEqual('YTREWQ');
        });
        // when the text is all lower case
        it('when the text is all lower case', () => {
          expect(solution('qwerty123', false)).toEqual('321YTREWQ');
        });
        // when the text is mixed upper and lower case
        it('when the text is mixed upper and lower case', () => {
          expect(solution('QwErTy', false)).toEqual('YTREWQ');
        });
        // when the text contains punctuation
        it('when the text contains punctuation', () => {
          expect(solution('A..(-)..B', false)).toEqual('B..)-(..A');
        });
        // when the text contains numbers
        it('when the text contains numbers', () => {
          expect(solution('12df12df', false)).toEqual('FD21FD21');
        });
      });
    },
  );
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; for (let d = a.length - 1; 0 <= d; d--)c += a[d]; let d = ""; return d = b ? c.toLowerCase() : c.toUpperCase(), d }

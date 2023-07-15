'use strict';

/**
 * sets all the characters in a string to upper or lower case
 * @param {string} [text=''] - the text to casify
 * @param {boolean} [isLowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the text in all lower or upper case
 */

// -------- your solutions --------

const modifyText = (text = '', isLowerCase = true) => {
  return isLowerCase ? text.toLowerCase() : text.toUpperCase();
};

for (const solution of [modifyText]) {
  describe(solution.name + ': sets a text to lower or upper case', () => {
    describe("the function's default parameters", () => {
      it('second parameter defaults to true', () => {
        expect(solution('asdf')).toEqual('asdf');
      });
      it('first parameter defaults to an empty string', () => {
        expect(solution()).toEqual('');
      });
    });
    // write the tests indicated by the comments
    describe('parameters include comments', () => {
      it('///**/', () => {
        expect(solution('///**/')).toEqual('///**/');
      });
      it('>/>/>>', () => {
        expect(solution('>/>/>>')).toEqual('>/>/>>');
      });
    });
    describe('when set to lower case', () => {
      // when the text is an empty string
      it('', () => {
        expect(solution('', false)).toEqual('');
      });
      // when the text is all upper case
      it('when the text is all upper case', () => {
        expect(solution('QWERTY', true)).toEqual('qwerty');
      });
      // when the text is all lower case
      it('when the text is all lower case', () => {
        expect(solution('qwerty', true)).toEqual('qwerty');
      });
      // when the text is mixed upper and lower case
      it('when the text is mixed upper and lower case', () => {
        expect(solution('QwErTy', true)).toEqual('qwerty');
      });
      // when the text contains punctuation
      it('when the text contains punctuation', () => {
        expect(solution('Hello! My friend!', true)).toEqual(
          'hello! my friend!',
        );
      });
      // when the text contains numbers
      it('when the text contains numbers', () => {
        expect(solution('Excellent 404', true)).toEqual('excellent 404');
      });
    });
    describe('when set to upper case', () => {
      // when the text is an empty string
      it('when the text is an empty string', () => {
        expect(solution('', false)).toEqual('');
      });
      // when the text is all upper case
      it('when the text is all upper case', () => {
        expect(solution('QWERTY', false)).toEqual('QWERTY');
      });
      // when the text is all lower case
      it('when the text is all upper case', () => {
        expect(solution('qwerty', false)).toEqual('QWERTY');
      });
      // when the text is mixed upper and lower case
      it('when the text is mixed upper and lower case', () => {
        expect(solution('QwErTy', false)).toEqual('QWERTY');
      });
      // when the text contains punctuation
      it('when the text contains punctuation', () => {
        expect(solution('Hello! My friend!', false)).toEqual(
          'HELLO! MY FRIEND!',
        );
      });
      // when the text contains numbers
      it('when the text contains numbers', () => {
        expect(solution('Excellent 404', false)).toEqual('EXCELLENT 404');
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; return c = b ? a.toLowerCase() : a.toUpperCase(), c }

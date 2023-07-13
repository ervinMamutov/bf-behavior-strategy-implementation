/* 3 extra lines */

/* parsons-collapse: iterating until the new string's length is correct

  repeatString(text, repetitions) =>
    1. calculate the final length for the new string
    2. create a new string to fill with many text's
    3. iterate as long as the new string is too short
      a. check if the new string is long enough
        stop if it is, keep going if it is not
      b. append text to the new
      c. repeat
    return: the new repeated string

*/

import { repeatString } from './logic-in-head.js';

describe('repeats a string any number of times:', () => {
  describe('an empty string', () => {
    it('0 times -> ', () => {
      expect(repeatString('', 0)).toEqual('');
    });
    it('10 times -> ', () => {
      expect(repeatString('', 10)).toEqual('');
    });
    it('100 times -> ', () => {
      expect(repeatString('', 100)).toEqual('');
    });
  });
  describe('zero repetitions', () => {
    it('asdf', () => {
      expect(repeatString('asdf', 0)).toEqual('');
    });
    it('tommywalk', () => {
      expect(repeatString('tommywalk', 0)).toEqual('');
    });
  });
  describe('standard use cases', () => {
    it('go to school', () => {
      expect(repeatString('go to school', 3)).toEqual(
        'go to schoolgo to schoolgo to school',
      );
    });
    it('phrases with punctuation', () => {
      expect(repeatString('"Go!", said Dr. Seuss?', 2)).toEqual(
        '"Go!", said Dr. Seuss?"Go!", said Dr. Seuss?',
      );
    });
    it('special characters', () => {
      expect(repeatString('\\ \n \t s', 2)).toEqual('\\ \n \t s\\ \n \t s');
    });
  });
  describe('default values', () => {
    it('repetitions default should be 1', () => {
      expect(repeatString('asdf')).toEqual('asdf');
    });
    it('text default should be an empty string', () => {
      expect(repeatString()).toEqual('');
    });
  });
});

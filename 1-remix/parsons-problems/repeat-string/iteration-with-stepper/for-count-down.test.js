/* 3 extra lines */

/* parsons-collapse: iterating over the number of repetitions

  repeatString(text, repetitions) =>
    1. create a new string to fill with many text's
    2. create and initialize a stepper variable
    3. iterate repetitions number of times
      a. check if stepper is still less than repetitions
        keep going if it is, otherwise stop iterating
      b. append text to the new string
      c. increment the stepper
      d. repeat
    return: the new repeated string

*/

import { repeatString } from './for-count-down.js';

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

import { repeatString } from './for-count-up.js';

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

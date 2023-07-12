'use strict';

import { addArrays } from './my-solution.js';

describe('testing addArrays()', () => {
  describe('combines two array of the same length', () => {
    it('([1, 2], [4, 5]) -> [5, 7]', () => {
      expect(addArrays([1, 2], [4, 5])).toEqual([5, 7]);
    });
    it('(["a"], ["b"]) ->  ["ab"]', () => {
      expect(addArrays(['a'], ['b'])).toEqual(['ab']);
    });
  });
  describe('combines two array of the deferent length', () => {
    it('[1, 2, 3], [4, 5] -> ', () => {
      expect(() => addArrays([1, 2, 3], [4, 5])).toThrow(
        'arrays of deferent length',
      );
    });
    it('should throw an error ', () => {
      expect(() => addArrays(['a'], ['b', 'c'])).toThrow(
        'arrays of deferent length',
      );
    });
  });
  describe('combines two empty array', () => {
    it('([], []) -> []', () => {
      expect(addArrays([], [])).toEqual([]);
    });
  });
});

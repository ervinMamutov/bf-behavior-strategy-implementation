/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/5d6a8a05c968e80001066720 */

/* this exercise has 0 distractors */

import { addArrays } from './update-first-array.js';

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
            expect(() => addArrays([1, 2, 3], [4, 5])).toThrow();
        });
        it('should throw an error ', () => {
            expect(() => addArrays(['a'], ['b', 'c'])).toThrow();
        });
    });
    describe('combines two empty array', () => {
        it('([], []) -> []', () => {
            expect(addArrays([], [])).toEqual([]);
        });
    });
});

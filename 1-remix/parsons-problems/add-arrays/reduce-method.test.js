/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/60cab9c989d309000170ac65 */

import { addArrays } from './reduce-method.js';

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
                'Array lengths not same size',
            );
        });
        it('should throw an error ', () => {
            expect(() => addArrays(['a'], ['b', 'c'])).toThrow(
                'Array lengths not same size',
            );
        });
    });
    describe('combines two empty array', () => {
        it('([], []) -> []', () => {
            expect(addArrays([], [])).toEqual([]);
        });
    });
});

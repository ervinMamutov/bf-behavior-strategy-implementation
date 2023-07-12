'use strict';

import { addArrays } from './map-method-1.js';

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
                'Should raise an error when arguments are of varying length',
            );
        });
        it('should throw an error ', () => {
            expect(() => addArrays(['a'], ['b', 'c'])).toThrow(
                'Should raise an error when arguments are of varying length',
            );
        });
    });
    describe('combines two empty array', () => {
        it('([], []) -> []', () => {
            expect(addArrays([], [])).toEqual([]);
        });
    });
});

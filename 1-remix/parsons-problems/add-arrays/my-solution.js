'use strict';

/**
 * combines two arrays of equal length
 * @param [any[]] array1
 * @param [any[]] array1
 * @returns [any[]] array
 */

export function addArrays(array1, array2) {
  if (array1.length !== array2.length) {
    throw new Error('arrays of deferent length');
  }

  return array1.map((value, i) => value + array2[i]);
}

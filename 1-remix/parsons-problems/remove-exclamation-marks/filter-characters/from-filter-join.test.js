/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/60c5857682a32d000154e5ef */

import { removeExclamationMarks } from './from-filter-join.js';

describe('Test', () => {
  it('Hello World! -> Hello World', () => {
    expect(removeExclamationMarks('Hello World!')).toEqual('Hello World');
  });
  it('Hello World!!! -> Hello World', () => {
    expect(removeExclamationMarks('Hello World!!!')).toEqual('Hello World');
  });
  it('Hi! Hello! -> Hi Hello', () => {
    expect(removeExclamationMarks('Hi! Hello!')).toEqual('Hi Hello');
  });
});

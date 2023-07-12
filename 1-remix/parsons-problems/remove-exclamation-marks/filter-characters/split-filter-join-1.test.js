/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/58c58b7262f372bb330003a1 */

import { removeExclamationMarks } from './split-filter-join-1.js';

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

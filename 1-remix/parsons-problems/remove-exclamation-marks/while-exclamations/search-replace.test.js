/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/5e5ed30f4013f00001a33813 */

import { removeExclamationMarks } from './search-replace.js';

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

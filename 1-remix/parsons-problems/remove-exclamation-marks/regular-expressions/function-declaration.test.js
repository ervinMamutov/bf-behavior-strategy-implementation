/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/57f94b0a2faf02e74c000557 */

import { removeExclamationMarks } from './function-declaration.js';

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

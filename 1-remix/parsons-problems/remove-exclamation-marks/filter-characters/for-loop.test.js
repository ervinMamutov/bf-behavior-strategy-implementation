/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/60c61d06679fb30001ffe32f */

import { removeExclamationMarks } from './for-loop.js';

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

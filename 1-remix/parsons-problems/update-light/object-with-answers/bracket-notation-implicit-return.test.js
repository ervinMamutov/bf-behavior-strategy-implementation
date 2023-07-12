import { updateLight } from './bracket-notation-implicit-return.js';

describe('Random tests', () => {
  // 'green', 'yellow', 'red'
  it("'green -> yellow'", () => {
    expect(updateLight('green')).toEqual('yellow');
  });
  it('yellow -> red', () => {
    expect(updateLight('yellow')).toEqual('red');
  });
  it('red -> green', () => {
    expect(updateLight('red')).toEqual('green');
  });
});

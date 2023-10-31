import { convertToNumber } from "./convertToNumber";

describe('convertToNumber function', () => {
  it('should convert param to type number', () => {
    expect(convertToNumber('123')).toBe(123);
  })
  it('should throw when param is convertible to number', () => {
    expect(() => convertToNumber('ABC')).toThrow();
  })
});

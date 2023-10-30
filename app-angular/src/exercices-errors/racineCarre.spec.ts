import { racineCarre } from "./racineCarre";

describe('racineCarre function', () => {
  it('should square value of param', () => {
    expect(racineCarre(4)).toBe(2);
  })
  it('should throw when param is negative', () => {
    expect(() => racineCarre(-1)).toThrow();
  })
});

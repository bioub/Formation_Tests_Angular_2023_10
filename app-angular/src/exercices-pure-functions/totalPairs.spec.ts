import { totalPairs } from "./totalPairs";

describe('totalPairs function', () => {
  it('should returns total of even numbers', () => {
    expect(totalPairs([])).toBe(0);
    expect(totalPairs([1, 2, 3, 4,])).toBe(2);
  });
});

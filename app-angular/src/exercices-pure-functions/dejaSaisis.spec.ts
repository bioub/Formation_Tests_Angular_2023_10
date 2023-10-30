import { dejaSaisis } from "./dejaSaisis";

describe('dejaSaisis function', () => {
  it('should return params', () => {
    expect(dejaSaisis([1, 2])).toBe('Vous avez déjà saisi : 1 | 2');
  });
  it('should return undefined', () => {
    expect(dejaSaisis([])).toBeUndefined();
  });
});

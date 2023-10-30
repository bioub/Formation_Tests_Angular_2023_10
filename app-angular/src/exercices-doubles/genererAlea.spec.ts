import { genererAlea } from "./genererAlea";

describe('genererAlea function', () => {
  it('should return random int', () => {
    spyOn(Math, 'random').and.returnValue(0.5)
    expect(genererAlea(0, 100)).toBe(50);
  });
});

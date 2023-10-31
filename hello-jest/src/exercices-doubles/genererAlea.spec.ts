import { genererAlea } from "./genererAlea";

describe('genererAlea function', () => {
  it('should return random int', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.5);


    expect(genererAlea(0, 100)).toBe(50);
  });
});

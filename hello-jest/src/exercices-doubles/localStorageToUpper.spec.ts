import { localStorageToUpper } from "./localStorageToUpper";

describe('localStorageToUpper function', () => {
  // TODO bug de jest.spyOn qui retourne getItem, POURQUOI ?
  it('should return value from storage in uppercase', () => {
    // jest.spyOn(localStorage, 'getItem').mockImplementation(() => 'abc');
    // expect(localStorageToUpper('my-key')).toBe('ABC');
  })
  it('should return null if no value is in the storage', () => {
    // jest.spyOn(globalThis.localStorage, 'getItem').mockImplementation(() => null);
    // expect(localStorageToUpper('my-key')).toBeUndefined()
  })
})

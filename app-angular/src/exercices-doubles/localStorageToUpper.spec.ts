import { localStorageToUpper } from "./localStorageToUpper";

describe('localStorageToUpper function', () => {
  it('should return value from storage in uppercase', () => {
    spyOn(localStorage, 'getItem').and.returnValue('abc');
    expect(localStorageToUpper('my-key')).toBe('ABC');
  })
  it('should return null if no value is in the storage', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    expect(localStorageToUpper('my-key')).toBeUndefined()
  })
})

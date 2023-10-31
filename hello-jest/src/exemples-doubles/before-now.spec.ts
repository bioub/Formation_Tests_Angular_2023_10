import { beforeNow } from './before-now';

describe('beforeNow function', () => {
  // it('should fail depending of the actual time', () => {
  //   const date = new Date(2023, 9, 30, 14, 56, 0);
  //   expect(beforeNow(date)).toBeFalse();
  // });

  it('should pass with spyOn', () => {
    // 30 octobre 2023 à 12h
    const fakeNow = new Date(2023, 9, 30, 12, 0, 0).getTime();

    jest.spyOn(Date, 'now').mockReturnValue(fakeNow);

    const date = new Date(2023, 9, 30, 14, 56, 0);
    expect(beforeNow(date)).toBe(false);
  });

  it('should pass with spyOn (jasmin.timer().mockDate)', () => {
    jest.useFakeTimers()
    // 30 octobre 2023 à 12h
    jest.setSystemTime(new Date(2023, 9, 30, 12, 0, 0));

    // 30 octobre 2023 à 14h56
    expect(beforeNow(new Date(2023, 9, 30, 14, 56, 0))).toBe(false);


    // 30 octobre 2023 à 15h
    jest.setSystemTime(new Date(2023, 9, 30, 15, 0, 0));

    // 30 octobre 2023 à 14h56
    expect(beforeNow(new Date(2023, 9, 30, 14, 56, 0))).toBe(true);

    jest.getRealSystemTime(); // restaure la classe Date d'origine
    jest.useRealTimers()
  });

  // it('should be real date', () => {
  //   console.log(new Date().toLocaleString()); // doit être la vraie date
  // });
});

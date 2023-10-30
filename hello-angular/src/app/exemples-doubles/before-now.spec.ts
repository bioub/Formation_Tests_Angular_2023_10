import { beforeNow } from './before-now';

describe('beforeNow function', () => {
  // it('should fail depending of the actual time', () => {
  //   const date = new Date(2023, 9, 30, 14, 56, 0);
  //   expect(beforeNow(date)).toBeFalse();
  // });

  it('should pass with spyOn', () => {
    // 30 octobre 2023 à 12h
    const fakeNow = new Date(2023, 9, 30, 12, 0, 0).getTime();

    spyOn(Date, 'now').and.returnValue(fakeNow);

    const date = new Date(2023, 9, 30, 14, 56, 0);
    expect(beforeNow(date)).toBeFalse();
  });
});

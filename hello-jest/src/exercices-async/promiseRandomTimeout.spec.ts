import { promiseRandomTimeout } from "./promiseRandomTimeout";

describe('promiseRandomTimeout function', () => {
  it('should resolve val', async () => {
    jest.useFakeTimers();
    const promise = promiseRandomTimeout('ABC');
    jest.advanceTimersByTime(1000);
    const val = await promise;
    expect(val).toBe('ABC');
    jest.useRealTimers();
  });
});

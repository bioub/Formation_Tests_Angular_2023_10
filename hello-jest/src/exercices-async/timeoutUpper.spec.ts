import { timeoutUpper } from "./timeoutUpper";

describe('timeoutUpper function', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should call callback', (done) => {
    timeoutUpper('abc', (val) => {
      expect(val).toBe('ABC');
      done();
    });

    jest.advanceTimersByTime(1000);
  });

  it('should call callback', () => {
    const spy = jest.fn();

    // Un spy qui appelle done
    // const spy = jasmine.createSpy('done', () => {done()});
    timeoutUpper('abc', spy);

    jest.advanceTimersByTime(1000);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('ABC');
  });

  it('should call callback', () => {
    const spy = jest.fn();
    timeoutUpper('abc', spy);

    jest.advanceTimersByTime(1000);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('ABC');
  });
});

import { timeoutUpper } from "./timeoutUpper";

describe('timeoutUpper function', () => {
  beforeEach(() => {
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should call callback', (done) => {
    timeoutUpper('abc', (val) => {
      expect(val).toBe('ABC');
      done();
    });

    jasmine.clock().tick(1000);
  });

  it('should call callback', () => {
    const spy = jasmine.createSpy();
    timeoutUpper('abc', spy);

    jasmine.clock().tick(1000);
    expect(spy).toHaveBeenCalledOnceWith('ABC');
  });
});

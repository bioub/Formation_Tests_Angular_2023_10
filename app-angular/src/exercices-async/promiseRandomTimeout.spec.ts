import { promiseRandomTimeout } from "./promiseRandomTimeout";

describe('promiseRandomTimeout function', () => {
  it('should resolve val', async () => {
    jasmine.clock().install();
    const promise = promiseRandomTimeout('ABC');
    jasmine.clock().tick(1000);
    const val = await promise;
    expect(val).toBe('ABC');
    jasmine.clock().uninstall();
  });
});

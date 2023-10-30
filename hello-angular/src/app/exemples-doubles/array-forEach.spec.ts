describe('Array.prototype.forEach function', () => {


  it('should not call callback when array is empty', () => {
    const spy = jasmine.createSpy();
    [].forEach(spy);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should call callback for each element of the array', () => {
    const spy = jasmine.createSpy();
    ['A', 'B', 'C'].forEach(spy);
    expect(spy).toHaveBeenCalledTimes(3);

    // Remarque : trop détaillé
    expect(spy.calls.argsFor(0)).toEqual(['A', 0, ['A', 'B', 'C']]);
    expect(spy.calls.argsFor(1)).toEqual(['B', 1, ['A', 'B', 'C']]);
    expect(spy.calls.argsFor(2)).toEqual(['C', 2, ['A', 'B', 'C']]);
  });

})

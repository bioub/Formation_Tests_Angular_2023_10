describe('Array.prototype.forEach function', () => {


  it('should not call callback when array is empty', () => {
    const spy = jest.fn();
    [].forEach(spy);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should call callback for each element of the array', () => {
    const spy = jest.fn();
    ['A', 'B', 'C'].forEach(spy);
    expect(spy).toHaveBeenCalledTimes(3);

    // Remarque : trop détaillé
    // expect(spy.call(0).args).toEqual(['A', 0, ['A', 'B', 'C']]);
    // expect(spy.call(1).args).toEqual(['B', 1, ['A', 'B', 'C']]);
    // expect(spy.call(2).args).toEqual(['C', 2, ['A', 'B', 'C']]);
  });

})

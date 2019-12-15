it('should check from equal values', function() {
    expect(5).toEqual(5)
})

it('should check for equal values using deep equality', function() {
    expect( {foo: 5 }).toEqual({ foo: 5 })
    expect( [1, 2, 3]).toEqual([1, 2, 3])
})

// toContain
it('should check thtat an array contains a specific value', function() {
    expect([1, 2, 3]).toContain(2)
})

// toContainEqual
it('should check thtat an array contains a specific value', function () {
    expect([{ foo: 5}, { foo: 6 }]).toContainEqual({ foo: 6 })
})

it('should support spies', function() {
    const spy = jest.fn()
    spy('foo')
    spy('foo')
    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledTimes(2)
    expect(spy).toHaveBeenCalledWith('foo')
})
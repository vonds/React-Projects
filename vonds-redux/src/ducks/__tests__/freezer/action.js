import { actions, types } from '../../freezer'

describe('updateTemperature()', function () {
    it('should contain the right acton type', function () {
        const action = actions.updateTemperature()
        expect(action.type).toEqual(types.UPDATE_TEMPERATURE)
    })
    it('should contain the temperature in the payload', function () {
        const action = actions.updateTemperature(-5)
        expect(action.payload).toEqual(-5)
    })
})

describe('addProductToFreezer()', function () {
    it('should contain the right acton type', function () {
        const action = actions.addProductToFreezer()
        expect(action.type).toEqual(types.ADD_PRODUCT_TO_FREEZER)
    })
    it('should contain the name in the action payload', function () {
        const action = actions.addProductToFreezer('foo')
        expect(action.payload.name).toEqual('foo')
    })
    it('should contain the amount in the action payload', function () {
        const action = actions.addProductToFreezer('foo', 5)
        expect(action.payload.amount).toEqual(5)
    })
    it('should default to 1 amount in the action payload', function () {
        const action = actions.addProductToFreezer('foo')
        expect(action.payload.amount).toEqual(1)
    })
})
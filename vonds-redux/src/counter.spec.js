import { increaseCount, reducer, store } from './counter'

describe('Counter', function() {
    it('should have a default state', function() {
        const result = reducer()
        expect(result.count).toEqual(0)
    })
    it('should increase the count', function() {
        const action = increaseCount()
        const result = reducer(undefined, action)
        expect(result.count).toEqual(1)
    })
    it('should increase the count with a cusomt count value', function() {
        const action = increaseCount(5)
        const result = reducer(undefined, action)
        expect(result.count).toEqual(5)
    })
})

describe('Sheep counting store', function() {
    it('should return the state', function() {
        const state = store.getState()
        expect(state.count).toEqual(0)
    })

    it('should dispatch actions and update the state', function() {
        const action = increaseCount()
        store.dispatch(action)
        expect(store.getState().count).toEqual(1)
    })

    it('should call the subscribers when the store data changes', function() {
        const listener = jest.fn()
        store.subscribe(listener)
        const action = increaseCount()
        store.dispatch(action)
        expect(listener).toHaveBeenCalled()
    })

    it('should unsubscribe', function () {
        const listener = jest.fn()
        const unsubscribe = store.subscribe(listener)
        const action = increaseCount()
        unsubscribe()
        store.dispatch(action)
        expect(listener).not.toHaveBeenCalled()
    })
})
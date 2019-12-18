export const types = {
    UPDATE_TEMPERATURE: 'UPDATE_TEMPERATURE',
    ADD_PRODUCT_TO_FREEZER: 'ADD_PRODUCT_TO_FREEZER'
} 

const DEFAULT_STATE = {
    temperature: null,
    flavors: {},
}

export function reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.UPDATE_TEMPERATURE:
            return {
                ...state,
                temperature: action.payload,
            }
        case types.ADD_PRODUCT_TO_FREEZER:
            const amount = (state.flavors[action.payload.name] || 0) + action.payload.amount
            return {
                ...state,
                flavors: {
                    ...state.flavors,
                    [action.payload.name]: Math.min(amount, 60)
                }
            }
        default:
            return state
    }
}

export const actions = {
    updateTemperature(temperature) {
        return {
            type: types.UPDATE_TEMPERATURE,
            payload: temperature
        }
    },  

    addProductToFreezer(name, amount = 1) {
        return {
            type: types.ADD_PRODUCT_TO_FREEZER,
            payload: {
                name,
                amount
            }
        }
    },

    doSomething() {
        return function(dispatch, getState) {
            dispatch({
                type: 'FOO',
                payload: getState().freezer.temperature
            })
        }
    }
}
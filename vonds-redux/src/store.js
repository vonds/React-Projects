import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as freezer} from './ducks/freezer'
import { reducer as orders} from './ducks/orders'
import { reducer as employees} from './ducks/employees'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({ 
    freezer,
    orders,
    employees
})

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
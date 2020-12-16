import { combineReducers } from 'redux'
import authReducer from './reducers/authReducer'

const rootReducer = combineReducers({
    review: authReducer
})

export default rootReducer
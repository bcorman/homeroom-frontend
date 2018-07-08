import { combineReducers } from 'redux'
import authReducer from './authReducer'
import modalReducers from './modalReducer'

const rootReducer = combineReducers({
  modals: modalReducers,
  auth: authReducer
})

export default rootReducer

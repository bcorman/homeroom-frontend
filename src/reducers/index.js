import { combineReducers } from 'redux'
import authReducer from './authReducer'
import modalReducers from './modalReducer'

const rootReducer = combineReducers({
  modalReducers,
  auth: authReducer
})

export default rootReducer

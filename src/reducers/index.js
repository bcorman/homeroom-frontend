import { combineReducers } from 'redux'
import authReducer from './authReducer'
import dropdownReducer from './dropdownReducer'



const rootReducer = combineReducers({
  list: dropdownReducer,
  auth: authReducer
})

export default rootReducer

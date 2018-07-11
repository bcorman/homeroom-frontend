import { combineReducers } from 'redux'
import authReducer from './authReducer'
import facultyReducer from './facultyReducer'
import classesReducer from './classReducer'



const rootReducer = combineReducers({
  faculty: facultyReducer,
  classes: classesReducer,
  auth: authReducer
})

export default rootReducer

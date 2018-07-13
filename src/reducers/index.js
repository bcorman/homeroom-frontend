import { combineReducers } from 'redux'
import authReducer from './authReducer'
import facultyReducer from './facultyReducer'
import classesReducer from './classReducer'
import postReducer from './postReducer'
import viewReducer from './viewReducer'



const rootReducer = combineReducers({
  view: viewReducer,
  posts: postReducer,
  faculty: facultyReducer,
  classes: classesReducer,
  auth: authReducer
})

export default rootReducer

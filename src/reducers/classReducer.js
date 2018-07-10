import { LIST_CLASSES, SET_CLASS_VIEW } from '../actions/types'

const defaultClasses = [{
  subject: 'Science',
  gradeLevel: 6
},{
  subject: 'Music',
  gradeLevel: 8
}]

const classReducer = (state = {}, action) => {
  switch (action.type) {
    case LIST_CLASSES:
      return {...state, classes: action.payload }
    case SET_CLASS_VIEW:
      return {...state, currentClass: action.payload }
    default:
      return state
  }
}

export default classReducer

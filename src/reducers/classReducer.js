import { LIST_CLASSES, VIEW_CLASS } from '../actions/types'

const defaultClasses = [{
  subject: 'Science',
  gradeLevel: 6
},{
  subject: 'Music',
  gradeLevel: 8
}]

let classReducer = (state = {}, action) => {
  switch (action.type) {
    case LIST_CLASSES:
      return {...state, classes: action.payload }
    case VIEW_CLASS:
      return {...state, currentClass: action.payload }
    default:
      return state
  }
}

export default classReducer

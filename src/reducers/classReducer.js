import { LIST_CLASSES, VIEW_CLASS, VIEW_CLASS_PAGE } from '../actions/types'

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
    case VIEW_CLASS_PAGE:
      return {...state, page: action.payload}
    default:
      return state
  }
}

export default classReducer

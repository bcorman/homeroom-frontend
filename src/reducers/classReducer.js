import { LIST_CLASSES } from '../actions/types'

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
    default:
      return state
  }
}

export default classReducer

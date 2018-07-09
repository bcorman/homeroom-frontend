import { LIST_FACULTY } from '../actions/types'

let defaultFaculty = [{
  name: 'Principle Skinner',
  username: 'cmore',
  email: 'pskinner@springfield.edu',
  isAdmin: true
}]

const dropdownReducer = (state = defaultFaculty, action) => {
  switch (action.type) {
    case LIST_FACULTY:
      return {...state, faculty: action.payload }
    default:
      return state
  }
}

export default dropdownReducer

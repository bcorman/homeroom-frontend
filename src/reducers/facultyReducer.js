import { LIST_FACULTY, VIEW_FACULTY } from '../actions/types'

const defaultFaculty = [{
  name: 'Principle Skinner',
  username: 'cmore',
  password: 'krabappel',
  email: 'pskinner@springfield.edu',
  isAdmin: true
}, {
  name: 'Edna Krabappel',
  username: 'krabs',
  password: 'cmore',
  email: 'ekrabappel@springfield.edu',
  isAdmin: false
}, {
  name: 'Otto Mann',
  classes: [],
  username: 'ottobus',
  password: 'ottobackwards',
  email: 'omann@springfield.edu',
  isAdmin: false
}]

const facultyReducer = (state = {}, action) => {
  switch (action.type) {
    case LIST_FACULTY:
      return {...state, faculty: action.payload }
    case VIEW_FACULTY:
      return {...state, currentFaculty: action.payload }
    default:
      return state
  }
}

export default facultyReducer

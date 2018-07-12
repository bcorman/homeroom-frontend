import axios from 'axios'
import { UNAUTH_USER, AUTH_USER, AUTH_ERROR, LIST_FACULTY, LIST_CLASSES } from './types'

const ROOT_URL = 'https://glacial-shelf-60914.herokuapp.com'

export const authError = (error) => {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signUpUser(name, username, email, password, passwordConfirmation, checked) {

  return function (dispatch) {
    axios.post(`${ROOT_URL}/signup`, {name, username, email, password, passwordConfirmation, checked })
      .then(response => {
        let user = response.data.user
        let faculty = response.data.faculty
        dispatch({ type: AUTH_USER, payload: user })
        dispatch({ type: LIST_FACULTY, payload: faculty })
      })
      .catch(({response}) => {
        dispatch(authError(response.data.error))
      })
  }
}

export function signInUser(email, password) {
  return function (dispatch) {
    // submit email and password to server
    const request = axios.post(`${ROOT_URL}/signin`, {email, password})
    request
      .then(response => {
        // -Save the JWT token
        localStorage.setItem('token', response.data.token)
        let user = response.data.user
        let faculty = response.data.faculty
        let classes = response.data.classes

        // -if request is good, we need to update state to indicate user is authenticated
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('email', user.email)
        localStorage.setItem('classes', JSON.stringify(classes))
        localStorage.setItem('faculty', JSON.stringify(faculty))
        dispatch({ type: AUTH_USER, payload: user})
        dispatch({ type: LIST_FACULTY, payload: faculty })
        dispatch({ type: LIST_CLASSES, payload: classes })
      })
      // If request is bad...
      // -Show an error to the user
      .catch(() => {
        dispatch(authError('bad login info'))
      })
  }
}

export function signOutUser() {
  localStorage.removeItem('token', 'user')
  return {
    type: UNAUTH_USER
  }
}

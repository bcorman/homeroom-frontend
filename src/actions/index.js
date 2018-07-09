import axios from 'axios'
import { UNAUTH_USER, AUTH_USER, AUTH_ERROR, FETCH_MESSAGE, LIST_FACULTY, CURRENT_USER } from './types'
import { getFaculty } from './dropdownActions'
const ROOT_URL = 'http://localhost:3090'

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
        console.log(`in axios call: `)
        console.log(response.data)
        // -if request is good, we need to update state to indicate user is authenticated
        localStorage.setItem('user', user.name)
        localStorage.setItem('email', user.email)
        dispatch({ type: AUTH_USER, payload: user})
        dispatch({ type: LIST_FACULTY, payload: faculty })
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

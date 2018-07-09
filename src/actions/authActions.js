// import axios from 'axios'
// import { UNAUTH_USER, AUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from './types'
// const ROOT_URL = 'http://localhost:3090'
//
// export const authError = (error) => {
//   return {
//     type: AUTH_ERROR,
//     payload: error
//   }
// }
//
// export function signUpUser(email, password, passwordConfirmation) {
//   return function (dispatch) {
//     axios.post(`${ROOT_URL}/signup`, {email, password, passwordConfirmation})
//       .then(response => {
//         dispatch({type: AUTH_USER})
//         localStorage.setItem('token', response.data.token)
//       })
//       .catch(({response}) => {
//         dispatch(authError(response.data.error))
//       })
//   }
// }
//
// export function signInUser({email, password}) {
//   return function (dispatch) {
//     // submit email and password to server
//     const request = axios.post(`${ROOT_URL}/signin`, {email, password})
//     request
//       .then(response => {
//
//         // -Save the JWT token
//         localStorage.setItem('token', response.data.token)
//         localStorage.setItem('user', response.data.user)
//         // -if request is good, we need to update state to indicate user is authenticated
//         dispatch({type: AUTH_USER})
//       })
//       // If request is bad...
//       // -Show an error to the user
//       .catch(() => {
//         dispatch(authError('bad login info'))
//       })
//   }
// }
//
// export function signOutUser() {
//   localStorage.removeItem('token')
//   return {
//     type: UNAUTH_USER
//   }
// }

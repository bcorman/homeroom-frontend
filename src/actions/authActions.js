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

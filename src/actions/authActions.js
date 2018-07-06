import axios from 'axios'
import { UNAUTH_USER, AUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from './types'
const ROOT_URL = 'http://localhost:3090'

export authError = (error) => {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export signUpUser = (email, password, passwordConfirm) => {
  return (dispatch) => {
    const request = axios.post(`${ROOT_URL}/signin`, {email, password})
    request
      .then(response => {
        // -Save the JWT token
        localStorage.setItem('token', response.data.token)

        // -if request is good, we need to update state to indicate user is authenticated
        dispatch({type: AUTH_USER})
      })

      // If request is bad...
      // -Show an error to the user
      .catch(() => {
        dispatch(authError('bad login info'))
      })
  }
}

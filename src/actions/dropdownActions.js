import axios from 'axios'
import ROOT_URL from ../config

export function getFaculty() {
  return function (dispatch) {
    axios.get(`${ROOT_URL}/faculty`)
      .then(response => {
        dispatch({type: LIST_FACULTY, payload: response.data.faculty})
      })
      .catch(({response}) => {
        dispatch(authError(response.data.error))
      })
  }
}

export function getFaculty() {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signup`, {username, email, password, passwordConfirmation})
      .then(response => {
        dispatch({type: AUTH_USER})
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', response.data.user)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

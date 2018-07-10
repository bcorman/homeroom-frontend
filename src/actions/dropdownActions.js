import axios from 'axios'
import { ROOT_URL } from '../config'
import { LIST_FACULTY, SET_CLASS_VIEW } from './types'

export function getFaculty() {
  return function (dispatch) {
    axios.get(`${ROOT_URL}/faculty`)
      .then(response => {
        dispatch({type: LIST_FACULTY, payload: response.data.faculty})
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function setClass(classRoom) {
  return {
    type: SET_CLASS_VIEW,
    payload: classRoom
  }
}

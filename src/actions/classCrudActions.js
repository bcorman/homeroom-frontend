import axios from 'axios'
import { LIST_CLASSES, VIEW_CLASS } from './types'
const ROOT_URL = 'https://glacial-shelf-60914.herokuapp.com'

export function createClass(subject, grade, faculty) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/class`, {subject, grade, faculty})
    .then(function (response) {
      console.log(response.data.classes)
      dispatch({type: LIST_CLASSES, payload: response.data.classes })
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}

export function populateClass(classId) {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/class`, classId)
      .then(function (response) {
        dispatch({type: VIEW_CLASS, payload: response.data.class })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
//
// export function getFaculty() {
//   return function (dispatch) {
//     axios.get(`${ROOT_URL}/faculty`)
//       .then(response => {
//         dispatch({type: LIST_FACULTY, payload: response.data.faculty})
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }
// }

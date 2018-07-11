import axios from 'axios'
import { ROOT_URL } from '../config'
import { CREATE_CLASS } from './types'

export function createClass(subject, grade, faculty) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/class`, {subject, grade, faculty})
    .then(function (response) {
      console.log(response.data)
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

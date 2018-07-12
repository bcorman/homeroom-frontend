import axios from 'axios'
import { ROOT_URL } from '../config'
import { CREATE_POST, GET_POSTS } from '../actions/types'


export function newPost (title, body, author, type, currentClass) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/post`, {title, body, timestamp: new Date(), author, type, currentClass})
      .then(function (response) {
        console.log(response)
        dispatch({type: CREATE_POST, payload: response.data.post})
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

export function getClassPosts (classId) {
  return function (dispatch) {
    console.log(` in post index function ${classId}`)
    axios.get(`${ROOT_URL}/post`, {classId})
      .then(function (response) {
        console.log(response)
        dispatch({type: GET_POSTS, payload: response.data.posts})
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

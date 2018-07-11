import axios from 'axios'
import { ROOT_URL } from '../config'
import { LIST_FACULTY, VIEW_CLASS, VIEW_FACULTY, GET_POSTS } from './types'

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

export function viewClass(classRoom) {
  return function (dispatch) {
    dispatch({
      type: VIEW_CLASS,
      payload: classRoom
    })
  }
}

export function viewFaculty(faculty) {
  return function (dispatch) {
    dispatch({
      type: VIEW_FACULTY,
      payload: faculty
    })
  }
}

export function getClassPosts (classId) {
  return function (dispatch) {
    console.log(` in post index function ${classId}`)

    axios.get(`${ROOT_URL}/class/posts/${classId}`)
      .then(function (response) {
        console.log(response)
        dispatch({type: GET_POSTS, payload: response.data.posts})
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

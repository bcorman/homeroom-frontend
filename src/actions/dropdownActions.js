import axios from 'axios'
import { LIST_FACULTY, VIEW_CLASS, VIEW_FACULTY, GET_POSTS } from './types'
let URL = 'https://glacial-shelf-60914.herokuapp.com'

export function getFaculty() {
  return function (dispatch) {
    axios.get(`${URL}/faculty`)
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

    axios.get(`${URL}/class/posts/${classId}`)
      .then(function (response) {
        console.log(response)
        dispatch({ type: GET_POSTS, posts: response.data.posts })
        dispatch({ type: VIEW_CLASS, currentClass: response.data.currentClass })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

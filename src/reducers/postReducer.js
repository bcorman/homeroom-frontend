import { CREATE_POST, GET_POSTS } from '../actions/types'

const postReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {...state, posts: [...state.posts, action.payload] }
    case GET_POSTS:
      return {...state, posts: action.payload }
    default:
      return state
  }
}

export default postReducer

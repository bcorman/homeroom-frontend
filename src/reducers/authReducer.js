import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from '../actions/types'

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {...state,
        error: '',
        authenticated: true,
        user: action.payload.name,
        email: action.payload.email,
        admin: action.payload.isAdmin
      }
    case UNAUTH_USER:
      return {...state, authenticated: false, username: '' }
    case AUTH_ERROR:
      return {...state, error: action.payload}
    case FETCH_MESSAGE:
      return {...state, message: action.payload}
    default:
      return state
  }
}

export default authReducer

import { CURRENT_USER } from '../actions/types'

const sessionReducer = (state = null, action) => {
  switch (action.type) {
    case CURRENT_USER:
      return { ...state, user: action.payload }
    default:
      return state
  }
}

export default sessionReducer

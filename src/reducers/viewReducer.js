import { VIEW_MAIN_PAGE } from '../actions/types'

const viewReducer = (state = 'announcements', action) => {
  switch (action.type) {
    case VIEW_MAIN_PAGE:
      return {...state, mainContainer: action.payload }
    default:
      return state
  }
}

export default viewReducer

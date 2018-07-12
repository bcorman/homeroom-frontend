import { VIEW_CLASS_PAGE } from './types'

export function populatePage (page) {
  return function (dispatch) {
    dispatch({
      type: VIEW_CLASS_PAGE,
      payload: page
    })
  }
}

import { VIEW_CLASS_PAGE, VIEW_MAIN_PAGE } from './types'

export function populatePage (page) {
  return function (dispatch) {
    dispatch({
      type: VIEW_CLASS_PAGE,
      payload: page
    })
  }
}

export function mainContainerView (page) {
  return function (dispatch) {
    dispatch({
      type: VIEW_MAIN_PAGE,
      payload: page
    })
  }
}

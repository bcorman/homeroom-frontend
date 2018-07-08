const modalReducer = (state = {modal: 'close'}, action) => {
  if (action.type === 'OPEN') {
    return {...state, modal: 'open' }
  } else if (action.type === 'CLOSE') {
    return {...state, modal: 'close' }
  } else {
    return state
  }
}


export default modalReducer

const defaultState = {
  signInShow: false,
  SignUpShow: false,
  signOutshow: false
}

const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SIGN_IN_OPEN':
      return {...state, signInShow: true}
    case 'SIGN_IN_CLOSE':
      return {...state, signInShow: false}
    case 'SIGN_UP_OPEN':
      return {...state, signUpShow: true}
    case 'SIGN_UP_CLOSE':
      return {...state, signUpShow: false}
    case 'SIGN_OUT_OPEN':
      return {...state, signOutShow: true}
    case 'SIGN_OUT_CLOSE':
      return {...state, signOutShow: false}
    default:
      return state
  }
}

export default modalReducer

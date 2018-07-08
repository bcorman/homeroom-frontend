import { SIGN_IN_OPEN, SIGN_IN_CLOSE, SIGN_UP_OPEN, SIGN_UP_CLOSE, SIGN_OUT_OPEN, SIGN_OUT_CLOSE } from './types'

export const signInOpen = (modal) => {
  return {
    type: SIGN_IN_OPEN,
    payload: modal
   }
}

export const signInClose = () => {
  return { type: SIGN_IN_CLOSE }
}

export const signOutOpen = (modal) => {
  return {
    type: SIGN_OUT_OPEN,
    payload: modal
   }
}

export const signOutClose = () => {
  return {type: SIGN_OUT_CLOSE }
}

export const signUpOpen = (modal) => {
  return {
    type: SIGN_UP_OPEN,
    payload: modal
   }
}

export const signUpClose = () => {
  return { type: SIGN_UP_CLOSE }
}

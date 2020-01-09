import {
  SHOW_SNACKBAR,
  CLOSE_SNACKBAR,
  SET_LOGGED_IN
} from './types'

export const showSnackbar = (variant, message) => {
  return {
    type: SHOW_SNACKBAR,
    payload: { open: true, variant, message }
  }
}

export const closeSnackbar = () => {
  return {
    type: CLOSE_SNACKBAR,
    payload: { open: false, variant: '', message: '' }
  }
}

export const setLoggedIn = user => {
  return {
    type: SET_LOGGED_IN,
    payload: user
  }
}
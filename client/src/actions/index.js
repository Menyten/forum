import {
  SHOW_SNACKBAR,
  CLOSE_SNACKBAR,
  SET_LOGGED_IN,
  SET_FORUMS
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

export const setForums = forums => {
  return {
    type: SET_FORUMS,
    payload: forums
  }
}
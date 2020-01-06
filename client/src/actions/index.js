import { SHOW_SNACKBAR, CLOSE_SNACKBAR } from './types'

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
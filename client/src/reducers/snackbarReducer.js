import {
  SHOW_SNACKBAR,
  CLOSE_SNACKBAR
} from '../actions/types'

const initialState = {
  open: false,
  variant: '',
  message: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_SNACKBAR:
      return { ...state, ...payload }
    case CLOSE_SNACKBAR:
      return { ...state, open: false }
    default:
      return state
  }
}
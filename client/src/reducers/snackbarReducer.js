const initialState = {
  open: false,
  variant: '',
  message: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_SNACKBAR':
      return { ...state, ...action.payload }
    case 'CLOSE_SNACKBAR':
      return { ...state, open: false }
    default:
      return state
  }
}
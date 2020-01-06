import snackbarReducer from './snackbarReducer'
import { combineReducers } from 'redux'

export default combineReducers({
  snackbar: snackbarReducer
})
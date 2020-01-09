import snackbarReducer from './snackbarReducer'
import userReducer from './userReducer'
import { combineReducers } from 'redux'

export default combineReducers({
  snackbar: snackbarReducer,
  user: userReducer
})
import snackbarReducer from './snackbarReducer'
import userReducer from './userReducer'
import forumReducer from './forumReducer'
import { combineReducers } from 'redux'

export default combineReducers({
  snackbar: snackbarReducer,
  user: userReducer,
  forums: forumReducer
})
import snackbarReducer from './snackbarReducer'
import userReducer from './userReducer'
import forumReducer from './forumReducer'
import threadReducer from './threadReducer'
import { combineReducers } from 'redux'

export default combineReducers({
  snackbar: snackbarReducer,
  user: userReducer,
  forums: forumReducer,
  threads: threadReducer
})
import {
  SHOW_SNACKBAR,
  CLOSE_SNACKBAR,
  SET_LOGGED_IN,
  SET_FORUMS,
  SET_THREADS,
  SET_THREAD
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

export const setThreads = threads => {
  return {
    type: SET_THREADS,
    payload: threads
  }
}

export const setThread = thread => {
  return {
    type: SET_THREAD,
    payload: thread
  }
}
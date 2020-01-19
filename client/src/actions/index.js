import {
  SHOW_SNACKBAR,
  CLOSE_SNACKBAR,
  USER_LOGIN,
  USER_LOGOUT,
  SET_FORUMS,
  SET_THREADS,
  SET_THREAD,
  ENABLE_EDITOR,
  DISABLE_EDITOR
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
    type: USER_LOGIN,
    payload: user
  }
}

export const logOut = () => {
  return {
    type: USER_LOGOUT,
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

export const enableEditor = () => {
  return {
    type: ENABLE_EDITOR,
  }
}

export const disableEditor = () => {
  return {
    type: DISABLE_EDITOR
  }
}
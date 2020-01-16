import { USER_LOGIN, USER_LOGOUT } from '../actions/types'

export default (state = {}, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
      return { ...state, ...payload }
    case USER_LOGOUT:
      return state = {}
    default:
      return state
  }
}
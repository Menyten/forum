import { SET_LOGGED_IN } from '../actions/types'

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SET_LOGGED_IN:
      return { ...state, ...payload }
    default:
      return state
  }
}
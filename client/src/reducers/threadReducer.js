import { SET_THREADS, EMPTY_THREADS } from '../actions/types'

export default (state = [], { type, payload }) => {
  switch (type) {
    case SET_THREADS:
      return [...state, ...payload]
    case EMPTY_THREADS:
      return state = []
    default:
      return state
  }
}
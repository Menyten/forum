import { SET_THREADS } from '../actions/types'

export default (state = [], { type, payload }) => {
  switch (type) {
    case SET_THREADS:
      return payload
    default:
      return state
  }
}
import { SET_FORUMS } from '../actions/types'

export default (state = [], { type, payload }) => {
  switch (type) {
    case SET_FORUMS:
      return payload
    default:
      return state
  }
}
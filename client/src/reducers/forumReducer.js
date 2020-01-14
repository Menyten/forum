import { SET_FORUMS } from '../actions/types'

export default (state = [], { type, payload }) => {
  switch (type) {
    case SET_FORUMS:
      return [...state, ...payload]
    default:
      return state
  }
}
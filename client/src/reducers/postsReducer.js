import { SET_POSTS } from '../actions/types'

export default (state = [], { type, payload }) => {
  switch (type) {
    case SET_POSTS:
      return payload
    default:
      return state
  }
}
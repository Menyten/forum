import { SET_THREAD } from '../actions/types'

const initialState = {
  title: '',
  posts: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_THREAD:
      return payload
    default:
      return state
  }
}
import { ENABLE_EDITOR, DISABLE_EDITOR } from '../actions/types'

const initalState = {
  showEditor: false,
  text: ''
}

export default (state = initalState, { type, payload }) => {
  switch (type) {
    case ENABLE_EDITOR:
      return { ...state, showEditor: true }
    case DISABLE_EDITOR:
      return { ...state, ...initalState }
    default:
      return state
  }
}
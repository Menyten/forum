import React from 'react'
import { Editor, EditorState, convertFromRaw } from 'draft-js'
import Typography from '@material-ui/core/Typography'

const ThreadPost = ({ storedState }) => {
  const state = convertFromRaw(storedState)
  const editorState = EditorState.createWithContent(state)
  return (
    <Typography
      variant='body2'
      component='section'
    >
      <Editor editorState={editorState} readOnly={true} />
    </Typography>
  )
}

export default ThreadPost
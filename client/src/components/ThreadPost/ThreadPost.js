import React from 'react'
import { Editor, EditorState, convertFromRaw } from 'draft-js'

const ThreadPost = ({ storedState }) => {
  const state = convertFromRaw(storedState)
  const editorState = EditorState.createWithContent(state)
  return (
    <div className="readonly-editor">
      <Editor editorState={editorState} readOnly={true} />
    </div>
  )
}

export default ThreadPost
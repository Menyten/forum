import React from 'react'
import { Editor, ConvertFromRaw } from 'draft-js'

const ThreadPost = ({ storedState }) => {
  const state = ConvertFromRaw(storedState)
  return (
    <div className="readonly-editor">
      <Editor editorState={state} readOnly={true} />
    </div>
  )
}

export default ThreadPost
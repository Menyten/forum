import React, { useEffect, useState, useRef } from 'react'
import { Editor, EditorState } from 'draft-js'

const MyEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const editor = useRef(null)

  useEffect(() => {
    focusEditor()
  }, [])

  const focusEditor = () => editor.current.focus()

  return (
    <div onClick={focusEditor}>
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={editorState => setEditorState(editorState)}
      />
    </div>
  )
}

export default MyEditor

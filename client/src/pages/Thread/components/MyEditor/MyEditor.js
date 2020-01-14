import React, { useEffect, useState, useRef } from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FormatBoldIcon from '@material-ui/icons/FormatBold'
import FormatItalicIcon from '@material-ui/icons/FormatItalic'
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import useStyles from './useStyles'

const MyEditor = () => {
  const classes = useStyles()
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const editor = useRef(null)

  useEffect(() => {
    focusEditor()
  }, [])

  const focusEditor = () => editor.current.focus()

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  return (
    <Paper variant='outlined' square onClick={focusEditor} className={classes.container}>
      <Grid container alignItems='center'>
        <IconButton size="medium">
          <FormatBoldIcon />
        </IconButton>
        <IconButton size="medium">
          <FormatItalicIcon />
        </IconButton>
        <IconButton size="medium">
          <FormatUnderlinedIcon />
        </IconButton>
      </Grid>
      <Typography variant='body2' component='section' className={classes.editor}>
        <Editor
          ref={editor}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={editorState => setEditorState(editorState)}
        />
      </Typography>
    </Paper>
  )
}

export default MyEditor

import React, { useEffect, useState, useRef } from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import ToolBar from './components/ToolBar'
import PublishIcon from '@material-ui/icons/Publish';
import useStyles from './useStyles'

const MyEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [toolbarButtonsState, setButtonsState] = useState({
    BOLD: false,
    ITALIC: false,
    UNDERLINE: false
  })
  const classes = useStyles()
  const editor = useRef(null)

  useEffect(() => {
    focusEditor()
  }, [])

  const focusEditor = () => editor.current.focus()

  const toggleButtonActiveState = style => setButtonsState({ ...toolbarButtonsState, [style]: !toolbarButtonsState[style] })

  const onStyleClick = e => {
    e.preventDefault()
    const style = e.currentTarget.getAttribute('name')
    toggleButtonActiveState(style)
    setEditorState(RichUtils.toggleInlineStyle(editorState, style))
  }

  const handleKeyCommand = (command, editorState) => {
    toggleButtonActiveState(command.toUpperCase())
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      setEditorState(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper
          variant='outlined'
          square
          onClick={focusEditor}
          className={classes.container}
        >
          <ToolBar
            onStyleClick={onStyleClick}
            toolbarButtonsState={toolbarButtonsState}
          />
          <Typography
            variant='body2'
            component='section'
            className={classes.editor}
          >
            <Editor
              ref={editor}
              editorState={editorState}
              handleKeyCommand={handleKeyCommand}
              onChange={editorState => setEditorState(editorState)}
            />
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} align='right'>
        <Button startIcon={<PublishIcon />}>
          Publicera
        </Button>
      </Grid>
    </Grid>
  )
}

export default MyEditor

import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import FormatBoldIcon from '@material-ui/icons/FormatBold'
import FormatItalicIcon from '@material-ui/icons/FormatItalic'
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined'
import Grid from '@material-ui/core/Grid'

const ToolBar = ({ onStyleClick, toolbarButtonsState: { BOLD, ITALIC, UNDERLINE } }) => (
  <Grid container alignItems='center'>
    <IconButton
      size="medium"
      color={BOLD ? 'primary' : 'default'}
      onMouseDown={onStyleClick}
      name='BOLD'
    >
      <FormatBoldIcon />
    </IconButton>
    <IconButton
      size="medium"
      color={ITALIC ? 'primary' : 'default'}
      onMouseDown={onStyleClick}
      name='ITALIC'
    >
      <FormatItalicIcon />
    </IconButton>
    <IconButton
      size="medium"
      color={UNDERLINE ? 'primary' : 'default'}
      onMouseDown={onStyleClick}
      name='UNDERLINE'
    >
      <FormatUnderlinedIcon />
    </IconButton>
  </Grid>
)

export default ToolBar

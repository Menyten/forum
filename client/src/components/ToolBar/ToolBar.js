import React from 'react'
import useStyles from './useStyles'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';

const ToolBar = () => {
  const classes = useStyles()

  return (
    <Toolbar variant='dense' className={classes.toolBar}>
      <Button variant='outlined' color='primary' startIcon={<AddIcon />} className={classes.btnAdd}>
        Ny tråd
      </Button>
    </Toolbar>
  )
}

export default ToolBar

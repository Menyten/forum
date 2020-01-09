import React from 'react'
import { Paper, Grid } from '@material-ui/core'

const ToolBar = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={1} square>
          <p>HELLO</p>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default ToolBar

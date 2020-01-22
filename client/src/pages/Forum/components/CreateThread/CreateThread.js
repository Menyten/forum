import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import MyEditor from '../../../Thread/components/MyEditor'
import useStyles from './useStyles'

const CreateThread = () => {
  const [title, setTitle] = useState('')
  const { forumId } = useParams()
  const { container } = useStyles()
  const apiUrl = `/api/forum/${forumId}`

  return (
    <Grid container className={container} spacing={1}>
      <Grid item xs={12}>
        <TextField
          id="filled-full-width"
          label="Titel"
          placeholder="..."
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <MyEditor apiUrl={apiUrl} title={title} />
      </Grid>
    </Grid>
  )
}

export default CreateThread

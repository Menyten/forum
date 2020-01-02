import React from 'react'
import { Grid, TextField } from '@material-ui/core';
import { createAccountFields } from '../../staticData'
import useStyles from './useStyles'

const CreateAccount = () => {
  const classes = useStyles()

  const renderFields = () => createAccountFields.map(field => <TextField label={field} required key={field} mt={2} />)

  return (
    <form className={classes.form}>
      {renderFields()}
    </form>
  )
}

export default CreateAccount
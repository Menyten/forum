import React, { useState } from 'react'
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Avatar
} from '@material-ui/core'
import { createAccountFields } from '../../staticData'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './useStyles'
import forum from '../../helpers/forum'
import { useDispatch } from 'react-redux'
import { showSnackbar } from '../../actions'

const CreateAccount = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [fields, setFields] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: ''
  })

  const openSnackbar = (variant, message) => dispatch(showSnackbar(variant, message))

  const submitForm = async e => {
    e.preventDefault()
    try {
      await forum.post('/api/user', fields)
      openSnackbar('success', 'Ditt konto har skapats!')
    } catch (e) {
      if (e.response.status === 403 || e.response.status === 500) {
        openSnackbar('error', 'Något gick fel. Var god försök igen!')
      }
    }
  }

  const handleInputs = e => setFields({ ...fields, [e.target.getAttribute('name')]: e.target.value })

  const renderFields = () => createAccountFields.map(({ label, type, name }) => (
    <Grid item xs={12} key={label}>
      <TextField
        type={type}
        label={label}
        name={name}
        required
        fullWidth
        value={fields[name]}
        onChange={handleInputs}
      />
    </Grid>
  ))

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Skapa konto
      </Typography>
        <form className={classes.form} onSubmit={submitForm}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label={'Förnamn'}
                required
                fullWidth
                value={fields.firstname}
                name='firstname'
                onChange={handleInputs}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label={'Efternamn'}
                required fullWidth
                value={fields.lastname}
                name='lastname'
                onChange={handleInputs}
              />
            </Grid>
            {renderFields()}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Skapa konto
        </Button>
        </form>
      </div>
    </Container>

  )
}

export default CreateAccount
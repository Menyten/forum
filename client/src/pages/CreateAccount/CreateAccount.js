import React, { useState } from 'react'
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Avatar,
  Snackbar
} from '@material-ui/core'
import { createAccountFields } from '../../staticData'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './useStyles'
import forum from '../../helpers/forum'
import MySnackbarWrapper from '../../components/MySnackbarWrapper'

const CreateAccount = () => {
  const [info, setInfo] = useState({
    open: false,
    message: '',
    variant: ''
  })
  const [fields, setFields] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: ''
  })
  const classes = useStyles()

  const handleClose = () => setInfo({ ...info, open: false })
  const handleOpen = (message, variant) => setInfo({ open: true, message, variant })

  const submitForm = async e => {
    e.preventDefault()
    try {
      await forum.post('/api/user', fields)
      handleOpen('Ditt konto har skapats!', 'success')
    } catch (e) {
      if (e.response.status === 403 || e.response.status === 500) {
        handleOpen('Något gick fel. Var god försök igen!', 'error')
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
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={info.open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <MySnackbarWrapper
          onClose={handleClose}
          variant={info.variant}
          message={info.message}
        />
      </Snackbar>
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
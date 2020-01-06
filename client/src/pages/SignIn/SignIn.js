import React, { useState } from 'react'
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Avatar
} from '@material-ui/core'
import MUILink from '@material-ui/core/Link'
import { Link } from 'react-router-dom'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './useStyles'


const SignIn = () => {
  const classes = useStyles()
  const [fields, setFields] = useState({
    username: '',
    password: ''
  })

  const handleInputs = e => setFields({ ...fields, [e.target.getAttribute('name')]: e.target.value })

  return (
    <Container maxWidth='xs'>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Logga in
      </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label={'Användarnamn/Email'}
                required
                fullWidth
                value={fields.firstname}
                name='username'
                onChange={handleInputs}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type='password'
                label={'Lösenord'}
                required
                fullWidth
                value={fields.firstname}
                name='password'
                onChange={handleInputs}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Logga in
        </Button>
          <Grid container>
            <Grid item xs>
              <MUILink component={Link} to='/glömt-lösenord' variant="body2">
                Glömt lösenord?
              </MUILink>
            </Grid>
            <Grid item>
              <MUILink component={Link} to='/skapa-konto' variant="body2">
                Har du inget konto?
              </MUILink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default SignIn

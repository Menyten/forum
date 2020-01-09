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
import { useDispatch } from 'react-redux'
import { showSnackbar, setLoggedIn } from '../../actions'
import { useHistory } from 'react-router-dom'
import useStyles from './useStyles'
import forum from '../../helpers/forum'
import setCookie from '../../helpers/setCookie'


const SignIn = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const classes = useStyles()
  const [fields, setFields] = useState({
    email: '',
    password: ''
  })

  const openSnackbar = (variant, message) => dispatch(showSnackbar(variant, message))

  const handleInputs = e => setFields({ ...fields, [e.target.getAttribute('name')]: e.target.value })

  const signIn = async e => {
    e.preventDefault()
    try {
      const res = await forum.post('/api/user/login', fields)
      setCookie(res.data.token)
      dispatch(setLoggedIn(res.data.user))
      history.push('/')
    } catch (e) {
      openSnackbar('error', 'Inloggning misslyckades!')
    }
  }

  return (
    <Container maxWidth='xs'>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Logga in
      </Typography>
        <form className={classes.form} onSubmit={signIn}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label={'Användarnamn/Email'}
                required
                fullWidth
                value={fields.firstname}
                name='email'
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

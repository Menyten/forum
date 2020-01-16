import React, { Fragment } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { logOut } from '../../actions'
import forum from '../../helpers/forum'
import removeCookie from '../../helpers/removeCookie'

const Header = () => {
  const { user } = useSelector(state => state)
  const dispatch = useDispatch()

  const onClickLogOut = async () => {
    await forum.post('/api/user/logout')
    removeCookie('access_token')
    dispatch(logOut())
  }

  const renderButtons = () => {
    if (!Object.keys(user).length) {
      return (
        <Fragment>
          <Button color="inherit" component={Link} to='/skapa-konto'>
            Skapa konto
          </Button>
          <Button color="inherit" component={Link} to='/logga-in'>
            Logga in
          </Button>
        </Fragment>
      )
    } else {
      return (
        <Button color="inherit" onClick={onClickLogOut}>
          Logga ut
        </Button>
      )
    }
  }

  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Typography color='inherit' variant="h6" component={Link} to='/' style={{ flexGrow: 1, textDecoration: 'none' }}>
            Forumet
          </Typography>
          {renderButtons()}
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header

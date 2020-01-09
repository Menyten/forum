import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button
} from '@material-ui/core'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Typography color='inherit' variant="h6" component={Link} to='/' style={{ flexGrow: 1, textDecoration: 'none' }}>
            Forumet
          </Typography>
          <Button color="inherit" component={Link} to='/skapa-konto'>
            Skapa konto
          </Button>
          <Button color="inherit" component={Link} to='/logga-in'>
            Logga in
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header

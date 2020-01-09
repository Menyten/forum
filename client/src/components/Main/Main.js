import React from 'react'
import { Switch, Route } from "react-router-dom";
import { StyledMain } from './StyledMain'
import Start from '../../pages/Start'
import CreateAccount from '../../pages/CreateAccount'
import SignIn from '../../pages/SignIn'
import Forum from '../../pages/Forum'
import { useSelector, useDispatch } from 'react-redux'
import { closeSnackbar } from '../../actions'
import MySnackbarWrapper from '../../components/MySnackbarWrapper'
import { Snackbar } from '@material-ui/core'

const Main = (props) => {
  const { snackbar: { open, variant, message } } = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <StyledMain>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={() => dispatch(closeSnackbar())}
      >
        <MySnackbarWrapper
          variant={variant}
          message={message}
          onClose={() => dispatch(closeSnackbar())}
        />
      </Snackbar>
      <Switch>
        <Route path='/forum/:id'>
          <Forum />
        </Route>
        <Route path='/logga-in'>
          <SignIn />
        </Route>
        <Route path='/skapa-konto'>
          <CreateAccount />
        </Route>
        <Route path='/'>
          <Start />
        </Route>
      </Switch>
    </StyledMain>
  )
}

export default Main

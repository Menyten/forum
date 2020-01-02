import React from 'react'
import { Switch, Route } from "react-router-dom";
import { StyledMain } from './StyledMain'
import Start from '../../pages/Start'
import CreateAccount from '../../pages/CreateAccount'

const Main = () => {
  return (
    <StyledMain>
      <Switch>
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

import React from 'react';
import './reset.css';
import { Switch, Route } from "react-router-dom";
import { StyledContainer, StyledMain } from './StyledApp'
import NavBar from '../NavBar'
import Start from '../../pages/Start'

const App = () => {
  return (
    <StyledContainer>
      <header>
        <NavBar />
      </header>
      <StyledMain>
        <Switch>
          <Route path='/'>
            <Start />
          </Route>
        </Switch>
      </StyledMain>
      <footer>
        Footer och annat
    </footer>
    </StyledContainer>
  )
}

export default App;

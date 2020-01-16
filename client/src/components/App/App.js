import React from 'react';
import './reset.css';
import { StyledContainer } from './StyledApp'
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'
import useLoggedIn from '../../helpers/useLoggedIn'

const App = () => {
  useLoggedIn()
  return (
    <StyledContainer>
      <Header />
      <Main />
      <Footer />
    </StyledContainer>
  )
}

export default App;

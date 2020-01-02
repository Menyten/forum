import React from 'react';
import './reset.css';
import { StyledContainer } from './StyledApp'
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'

const App = () => {
  return (
    <StyledContainer>
      <Header />
      <Main />
      <Footer />
    </StyledContainer>
  )
}

export default App;

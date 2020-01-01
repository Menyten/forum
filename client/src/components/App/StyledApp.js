import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const StyledMain = styled.main`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
`

export {
  StyledContainer,
  StyledMain
}
import styled from 'styled-components'

const FlexMain = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const MainStyled = styled.main`
  width: 100vw;
  padding: 1rem;
  @media (min-width: 768px) {
    width: calc(100vw - 100px);
    height: 100dvh;
  }
`

export { MainStyled, FlexMain }

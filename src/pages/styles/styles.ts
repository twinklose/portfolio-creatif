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

const ErrorContainer = styled.div`
  width: 100vw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SmileContainer = styled.div`
  max-width: 350px;
  margin: 0 auto;
`

export { MainStyled, FlexMain, ErrorContainer, SmileContainer }

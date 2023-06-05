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
  @media (min-width: 768px) {
    width: calc(100dvw - 100px);
    height: 100dvh;
  }
`

const WrapHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    height: 250px;
    align-items: flex-end;
    justify-content: space-around;
  }
`

export { MainStyled, FlexMain, WrapHeader }

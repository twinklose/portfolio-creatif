import styled from 'styled-components'

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  width: 100vw;
  position: relative;
  border-bottom: 2px solid ${({ theme }) => theme.text};
  padding: 1rem;
  z-index: 100;
  overflow: hidden;
  @media (min-width: 768px) {
    height: 100dvh;
    width: 100px;
    flex-direction: column;
    border-right: 2px solid ${({ theme }) => theme.text};
    border-bottom: none;
  }
`

const CircularButtonContainer = styled.div`
  width: 225px;
  height: 225px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export { NavStyled, CircularButtonContainer }

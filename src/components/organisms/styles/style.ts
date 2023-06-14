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
    height: 100vh;
    width: 100px;
    flex-direction: column;
    border-right: 2px solid ${({ theme }) => theme.text};
    border-bottom: none;
  }
`

const CircularButtonContainer = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    display: none;
  }
`

export { NavStyled, CircularButtonContainer }

import styled from 'styled-components'

const NavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 7.5vw;
  padding: 1rem;
  border-right: 2px solid ${({ theme }) => theme.text};
  position: relative;
`

export { NavStyled }

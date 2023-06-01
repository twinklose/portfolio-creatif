import styled from 'styled-components'

const NavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 7.5vw;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 1rem;
  border-right: 1px solid ${({ theme }) => theme.text};
`

export { NavStyled }

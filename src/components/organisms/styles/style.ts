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
  @media (min-width: 768px) {
    height: 100dvh;
    width: 100px;
    flex-direction: column;
    border-right: 2px solid ${({ theme }) => theme.text};
    border-bottom: none;
  }
`

export { NavStyled }

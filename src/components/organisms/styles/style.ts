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

const HeadSection = styled.section`
  height: 30%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`

export { NavStyled, HeadSection }

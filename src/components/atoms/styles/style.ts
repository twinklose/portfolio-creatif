import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const TitleStyled = Styled.h1`
  font-size: 10.5rem;
  font-weight: 500;
  text-transform: uppercase;
  text-align: left;
  line-height: .80;
  margin: 0;
  padding: 0;
`

const SubStyled = Styled.h2`
  font-size: 9rem;
  font-weight: 500;
  text-transform: uppercase;
  text-align: left;
  line-height: .80;
  margin: 0;
  padding: 0;
`

const Vertical = Styled.p`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 1.25rem;
  font-weight: 500;
  text-oriented: upright;
`

const Linked = Styled(Link)`
  writing-mode: sideways-lr;
  text-decoration: none;
  text-underline: none;
  color: ${({ theme }) => theme.text};
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`

const ToggleMode = Styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position : absolute;
  bottom: 1rem;
`

const ToggleImage = Styled.img`
  width: 1.5rem;
  height: 1.5rem;
`

export { TitleStyled, SubStyled, Vertical, Linked, ToggleMode, ToggleImage }

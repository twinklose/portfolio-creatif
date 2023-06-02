import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const Vertical = Styled.p`
  font-size: 1rem;
  @media (min-width: 768px) {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-size: 1.5rem;
  }
`

const Linked = Styled(Link)`
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
  width: 1.25rem;
  height: 1.25rem;
  margin: auto auto;
  right: 1rem;
  @media (min-width: 768px) {
    right: auto;
    bottom: 1rem;
    width: 1.5rem;
    height: 1.5rem;
  }
`

const ToggleImage = Styled.img`
  width: 100%;
  height: 100%;
`

export { Vertical, Linked, ToggleMode, ToggleImage }

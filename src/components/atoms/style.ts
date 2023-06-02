import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const Vertical = Styled.p`
  // make the text vertical and rotate it 90 degrees
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-transform: uppercase;
  font-size: 1rem;
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

export { Vertical, Linked }

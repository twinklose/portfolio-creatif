import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const Vertical = Styled.p`
  writing-mode: vertical-rl;
  text-orientation: upright;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 500;
  text-oriented: upright;
`

const Linked = Styled(Link)`
  text-decoration: none;
  text-underline: none;
`

export { Vertical, Linked }

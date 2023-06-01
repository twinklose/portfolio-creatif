import React from 'react'
import TogglerButton from '../atoms/ToggleDarkMode'
import Typography from '../atoms/Typography'
import { NavStyled } from './style'
import { Link } from 'react-router-dom'

export default function Navbar({
  themeToggler,
}: {
  themeToggler: () => void
}): JSX.Element {
  return (
    <NavStyled>
      <Link to="/contact">
        <Typography content="Contact" variant="vertical" />
      </Link>
      <Link to="/about">
        <Typography content="À propos" variant="vertical" />
      </Link>
      <Link to="/projects">
        <Typography content="Projets" variant="vertical" />
      </Link>
      <TogglerButton themeToggler={themeToggler} />
    </NavStyled>
  )
}

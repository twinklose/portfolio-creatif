import React from 'react'
import TogglerButton from '../atoms/ToggleDarkMode'
import Typography from '../atoms/Typography'
import { NavStyled } from './styles/style'
import { Linked } from '../atoms/styles/style'

export default function Navbar({
  themeToggler,
}: {
  themeToggler: () => void
}): JSX.Element {
  return (
    <NavStyled>
      <Linked to="/projects">
        <Typography content="Projets" variant="vertical" />
      </Linked>
      <Linked to="/about">
        <Typography content="À propos" variant="vertical" />
      </Linked>
      <Linked to="/contact">
        <Typography content="Contact" variant="vertical" />
      </Linked>
      <TogglerButton themeToggler={themeToggler} />
    </NavStyled>
  )
}

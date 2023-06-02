import React from 'react'
import TogglerButton from '../atoms/ToggleDarkMode'
import { NavStyled } from './styles/style'
import { Linked, Vertical } from '../atoms/styles/style'

export default function Navbar({
  themeToggler,
}: {
  themeToggler: () => void
}): JSX.Element {
  return (
    <NavStyled>
      <Linked to="/projects">
        <Vertical>Projets</Vertical>
      </Linked>
      <Linked to="/about">
        <Vertical>À propos</Vertical>
      </Linked>
      <Linked to="/contact">
        <Vertical>Contact</Vertical>
      </Linked>
      <TogglerButton themeToggler={themeToggler} />
    </NavStyled>
  )
}

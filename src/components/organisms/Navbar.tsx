import React from 'react'
import TogglerButton from '../atoms/ToggleDarkMode'

export default function Navbar({
  themeToggler,
}: {
  themeToggler: () => void
}): JSX.Element {
  return (
    <>
      <nav>
        <TogglerButton themeToggler={themeToggler} />
      </nav>
    </>
  )
}

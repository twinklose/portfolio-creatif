import React, { useContext } from 'react'
import { DarkModeContext } from '../../contexts/DarkModeContext'

export default function ToggleDarkMode(): JSX.Element {
  const { theme, toggleTheme } = useContext(DarkModeContext)
  console.log(theme)
  return <button onClick={toggleTheme}>{theme === 'light' ? '🌙' : '☀️'}</button>
}

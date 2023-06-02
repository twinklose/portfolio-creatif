import React from 'react'
import { lightTheme, darkTheme } from './components/styles/theme.'
import DarkModeContext from './contexts/DarkModeContext'
import useThemeMode from './hooks/useThemeMode'
import { ThemeProvider } from 'styled-components'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import { Route, Routes } from 'react-router-dom'
import Global from './components/styles/global'

export default function App(): JSX.Element {
  const { theme, themeToggler } = useThemeMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  return (
    <DarkModeContext>
      <ThemeProvider theme={themeMode}>
        <Global />
        <Routes>
          <Route index element={<Home themeToggler={themeToggler} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </ThemeProvider>
    </DarkModeContext>
  )
}

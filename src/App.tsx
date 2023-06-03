import React from 'react'
import { lightTheme, darkTheme } from './components/styles/theme.'
import DarkModeContext from './contexts/DarkModeContext'
import useThemeMode from './hooks/useThemeMode'
import { ThemeProvider } from 'styled-components'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import { useLocation, useRoutes } from 'react-router-dom'
import Global from './components/styles/global'
import Error from './pages/Error'
import { AnimatePresence } from 'framer-motion'

export default function App(): JSX.Element | null {
  if (!window.localStorage.getItem('theme')) {
    window.localStorage.setItem('theme', 'light')
  }

  const { theme, themeToggler } = useThemeMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  const routeElements = useRoutes([
    { path: '/', element: <Home themeToggler={themeToggler} /> },
    { path: '/about', element: <About themeToggler={themeToggler} /> },
    { path: '/contact', element: <Contact themeToggler={themeToggler} /> },
    { path: '/projects', element: <Projects themeToggler={themeToggler} /> },
    { path: '*', element: <Error /> },
  ])

  const location = useLocation()

  if (!routeElements) return null

  return (
    <DarkModeContext>
      <ThemeProvider theme={themeMode}>
        <Global />
        <AnimatePresence mode="wait">
          {React.cloneElement(routeElements, { key: location.pathname })}
        </AnimatePresence>
      </ThemeProvider>
    </DarkModeContext>
  )
}

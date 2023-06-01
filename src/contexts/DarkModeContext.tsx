import React from 'react'
import { ThemeProvider } from 'styled-components'
import useThemeMode from '../hooks/useThemeMode'
import { lightTheme, darkTheme } from '../components/styles/theme.'

export default function DarkModeContext({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const { theme } = useThemeMode()

  const themeMode = theme === 'dark' ? darkTheme : lightTheme

  return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
}

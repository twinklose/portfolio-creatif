import { useEffect, useState } from 'react'

export default function useThemeMode(): {
  theme: string
  themeToggler: () => void
} {
  const [theme, setTheme] = useState('dark')

  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const themeToggler = () =>
    theme === 'dark' ? setMode('light') : setMode('dark')

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
  }, [])

  return { theme, themeToggler }
}

import React, { createContext, useState } from 'react'

export const DarkModeContext = createContext({
  theme: 'light',
  toggleTheme: () => {
    // do nothing
  },
})

export default function DarkModeProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <DarkModeContext.Provider value={{ theme, toggleTheme }}>{children}</DarkModeContext.Provider>
  )
}

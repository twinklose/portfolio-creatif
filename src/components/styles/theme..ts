export interface ThemeProps {
  background: string
  text: string
}

const darkTheme: ThemeProps = {
  background: 'var(--dark-background)',
  text: 'var(--dark-text)',
}

const lightTheme: ThemeProps = {
  background: 'var(--light-background)',
  text: 'var(--light-text)',
}

export { darkTheme, lightTheme }

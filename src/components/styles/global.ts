import { createGlobalStyle, withTheme } from 'styled-components'
import { ThemeProps } from './theme.'

type GlobalThemeProps = {
  theme: ThemeProps
}

const globalStyle = createGlobalStyle`
  :root {
    //dark-mode
    --dark-background: #1E1E1E;
    --dark-text: #ffffff;

    //light-mode
    --light-background: #ffffff;
    --light-text: #000000;

    //splash
    --splash-background: #1E1E1E;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body  {
    -webkit-font-smoothing: antialiased;
    height: 100vh;
    width: 100vw;
    font-family: 'Montserrat', sans-serif;
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
    color: ${({ theme }: GlobalThemeProps) => theme.text};
    transition: color 0.5s ease-in-out;
    transition: background-color 0.5s ease-in-out;
  }
`

export default withTheme(globalStyle)

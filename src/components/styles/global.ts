import { createGlobalStyle, withTheme } from 'styled-components'
import { ThemeProps } from './theme.'

type GlobalThemeProps = {
  theme: ThemeProps
}

const globalStyle = createGlobalStyle`
  :root {
    //dark-mode
    --dark-background: #1E1E1E;
    --dark-text: #F4F5F1;

    //light-mode
    --light-background: #F4F5F1;
    --light-text: #1E1E1E;;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body  {
    width: 100vw;
    font-size: 20px;
    transition: color 0.5s ease-in-out;
    -webkit-font-smoothing: antialiased;
    font-family: 'Montserrat', sans-serif;
    transition: background-color 0.5s ease-in-out;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
  }
`

export default withTheme(globalStyle)

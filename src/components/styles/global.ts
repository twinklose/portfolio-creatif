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

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body  {
    outline: 1px solid red;
    width: 100vw;
    font-size: 20px;
    transition: color 0.5s ease-in-out;
    font-family: 'Montserrat', sans-serif;
    transition: background-color 0.5s ease-in-out;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
  }
`

export default withTheme(globalStyle)

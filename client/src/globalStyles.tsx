import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
  }

  body {
    margin: 0;
    font-family: 'Roboto', Arial, sans-serif;
  }
`
// Color palette:

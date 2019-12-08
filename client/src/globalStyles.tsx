import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    --dominant-clr: #4670EC;
    --complementary-1: #5025BA;
    --complementary-2: #6A5F87;
    --complementary-3: #EFC784;
    --complementary-4: #BA6F25;
  }

  body {
    font-family: 'Roboto', Arial, sans-serif;
  }
`
/* Color palette:
  Color for highlighting *relevant* actions (dominant color): 
  {
    --dominant-clr: #4670EC;
  }
  Complementary colors to dominant: 
  {
    --complementary-1: #5025BA;
    --complementary-2: #6A5F87;
    --complementary-3: #EFC784;
    --complementary-4: #BA6F25;
  }
*/

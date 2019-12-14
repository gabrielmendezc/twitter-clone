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

  a {
    text-decoration: none;
    font-size: 1.4rem;
  }

  div#root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  div#initial-loader {
    min-height: 100vh;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    background-image: linear-gradient(
    50deg,
    var(--complementary-1) 25%,
    var(--complementary-2)
  );
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4em;

    svg {
      margin-top: -60px;
      -webkit-animation: rotate-center 1.4s cubic-bezier(0.230, 1.000, 0.320, 1.000) infinite both;
	    animation: rotate-center 1.4s cubic-bezier(0.230, 1.000, 0.320, 1.000) infinite both;
    }

    @-webkit-keyframes rotate-center {
      0% {
        -webkit-transform: rotate(0);
        transform: rotate(0);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes rotate-center {
      0% {
        -webkit-transform: rotate(0);
        transform: rotate(0);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    h1 {
      margin-top: -45px;
      color: white;
    }
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

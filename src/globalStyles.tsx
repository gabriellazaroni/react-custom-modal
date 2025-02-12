import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
    --white: #FFFFFF;

    --black: #000000;

    --gray-700: #1A1A1E;

    --purple: #4e2b6e;

    --font-l: clamp(0.2rem, 4vw , 1.5rem); // 24px
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;

    ::-webkit-scrollbar {
      width: 0.5px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      border: 2px solid transparent;
    }
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    font-family: "Noto Sans", sans-serif;
  }

  button {
    cursor: pointer;
  }

  button::-moz-focus-inner {
    border: 0;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-border-radius: 0;
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: #FFFFFF !important;
  }
`
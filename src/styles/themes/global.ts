import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  input, textarea, button, body {
    font-family: "Roboto",sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  body {
    background:  ${({ theme }) => theme.colors['base-400']};
  }

`

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, 'Roboto', sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }
  body {
    background: #fefefe;
    color: #ffffff;
    height: 100vh;
    margin: 0 auto;
    padding: 0;
    overscroll-behavior: none;
    width: 100%; 
  }
`
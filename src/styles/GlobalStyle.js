import { createGlobalStyle } from 'styled-components'
import { fadeIn } from './animation'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }
  body {
    background: #fefefe;
    height: 100vh;
    margin: 0 auto;
    padding: 0;
    overscroll-behavior: none;
    width: 100%; 
  }
  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }

  /* Slide */
  .slick-slide{
    padding-right: 10px;
    box-sizing: border-box;
  }
  .slick-slide:last-child{
    padding-right: 0;
  }
  .hiddenOptions{
    visibility: hidden;
    transition: 0.1s;
  }
  .editTable:hover .hiddenOptions{
    visibility: visible;
    transition: 0.1s;
  }
  
  .slider-container {
    ${fadeIn()}
  }
`
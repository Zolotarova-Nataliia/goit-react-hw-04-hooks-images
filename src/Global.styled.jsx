import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  width: 100vw;
  overflow-x: hidden;
}    
body {
background-color: #ffff;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
ul {
  list-style: none;
  padding: 0;
}
`;

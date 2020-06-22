import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle<{dark: boolean}>`
  body {
    ${({dark}) => dark ?  
     `
      background-color: black;
      color: snow;
    `
    : 
    `
      background-color: white;
      color: #151515;
    `
    };
    font-family: helvetica;
  }
`;
export default GlobalStyle;

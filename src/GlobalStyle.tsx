import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle<{dark: boolean}>`
  body {
    ${({dark}) => dark ?  
     `
     background-color: black;
     color: dodgerblue;
    `
    : 
    `
      background-color: white;
      color: #151515;
    `
    };
  }
`;
export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0 auto;
  }
  
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }  

  svg{
    transition: all .3s ease;
    &:hover{
      transform: scale(1.2);
    }
  }
`;

export default GlobalStyle;

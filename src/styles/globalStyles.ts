import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #FFF;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 16px Montserrat, sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }
  
  button {
    cursor: pointer;
  }
`;
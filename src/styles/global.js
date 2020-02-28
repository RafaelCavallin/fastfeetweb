import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  input, textarea, select {
    outline: 0;
}

  html, body, #root {
    height: 100%;
  }

  body {
    background: #F5F5F5;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

import { createGlobalStyle } from "styled-components";

import "../resources/styles/fonts.css";

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }
  
  body {
    font-family: Open Sans, Helvetica Neue, sans-serif;
    font-weight: 400;
    color: #000;
    user-select: none;
    height: 100%;
  }

  input, textarea, button {
    font-family: Open Sans, Helvetica Neue, sans-serif;
  }

  #app-container {
    height: 100%;
  }
`;

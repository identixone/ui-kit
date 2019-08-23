import { createGlobalStyle } from "styled-components";

import "../resources/styles/fonts.css";

export const GloalStyles = createGlobalStyle`
  html {
    height: 100%;
  }
  
  body {
    font: 16px/18px "Open Sans", Arial, sans-serif;
    font-weight: 400;
    color: #000;
    user-select: none;
    height: 100%;
  }

  #app-container {
    height: 100%;
  }
`;

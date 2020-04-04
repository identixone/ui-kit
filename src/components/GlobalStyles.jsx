import { createGlobalStyle } from "styled-components";

import "../style/font/fonts.css";
import { colors } from "../style";

export const GlobalStyles = createGlobalStyle`
  html, body, #app-container {
    height: 100%;
  }
  
  body {
    font-family: Open Sans, Helvetica Neue, sans-serif;
    font-weight: 400;
    color: ${colors.darkBlack};
    user-select: none;
  }

  input, textarea, button {
    font-family: Open Sans, Helvetica Neue, sans-serif;
  }
`;

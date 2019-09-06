import styled from "styled-components";

import ButtonThemes from "./ButtonThemes";
import ButtonSizes from "./ButtonSizes";
import ButtonFits from "./ButtonFits";

const StyledButton = styled.button`
  display: block;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  outline: ${({ isHardOutline }) =>
    isHardOutline ? "none !important" : "none"};
  border: none;
  padding: 0;
  box-sizing: border-box;
  transition: background-color 100ms,
              border-color 100ms,
              box-shadow 100ms,
              color 100ms,
              opacity 100ms;

  border-radius: ${({ isRounded }) => (isRounded ? "3px" : "0px")};

  ${({ buttonTheme }) => ButtonThemes[buttonTheme]}
  ${({ size }) => ButtonSizes[size]}
  ${({ fit }) => ButtonFits[fit]}
`;

export default StyledButton;

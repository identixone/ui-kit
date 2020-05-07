import styled, { css } from "styled-components";

import ButtonThemes from "./ButtonThemes";
import ButtonSizes from "./ButtonSizes";
import ButtonFits from "./ButtonFits";

const StyledButton = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 0;
  border: none;
  outline: ${({ isHardOutline }) =>
    isHardOutline ? "none !important" : "none"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-weight: 600;
  transition: background-color 100ms, border-color 100ms, box-shadow 100ms,
    color 100ms, opacity 100ms;
  ${({ theme, disabled }) => ButtonThemes[disabled ? "disabled" : theme]}
  ${({ size }) => ButtonSizes[size]}
  ${({ fit }) => ButtonFits[fit]}
  ${({ isFullWidth }) =>
    isFullWidth &&
    css`
      width: 100%;
    `}
`;

export { StyledButton };

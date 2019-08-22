import styled, { css } from "styled-components";

import Button from "../Button";

export const StyledCardAsideButtonStyles = css`
  width: 115px;
  opacity: 0.8;
  color: #000;
  font-size: 14px;
  line-height: 32px;
  background-color: #e4e9eb;
  text-transform: lowercase;
  text-align: center;

  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;

const StyledCardAsideButton = styled(Button).attrs({
  buttonTheme: "reset",
})`
  ${StyledCardAsideButtonStyles}
`;

export default StyledCardAsideButton;

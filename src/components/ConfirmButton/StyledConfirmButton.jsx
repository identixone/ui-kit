import styled, { css } from "styled-components";

import { Button } from "../Button";

import colors from "../../themes/colors";

function getHoverStyles({ isDisabled }) {
  return !isDisabled
    ? css`
        background-color: ${({ confirmColor }) => confirmColor};
        color: ${colors.whiteSimple};
      `
    : ``;
}

const StyledConfirmButton = styled(Button).attrs(() => ({
  buttonTheme: "reset",
}))`
  background-color: ${colors.blueWhite};
  min-width: 105px;

  ${({ isConfirm, confirmColor }) =>
    isConfirm &&
    css`
      background-color: ${confirmColor};
      color: ${colors.whiteSimple};
    `}

  &:hover {
    ${getHoverStyles};
  }
`;

export { StyledConfirmButton };

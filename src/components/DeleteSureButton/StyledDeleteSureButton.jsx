import styled, { css } from "styled-components";

import Button from "../Button";

import { colors } from "../../style";

function getHoverStyles({ isDisabled }) {
  return (
    !isDisabled &&
    css`
      background-color: ${({ deleteColor }) => deleteColor};
      color: ${colors.whiteSimple};
    `
  );
}

function getSureStyles({ isSure, deleteColor }) {
  return (
    isSure &&
    css`
      background-color: ${deleteColor};
      color: ${colors.whiteSimple};
    `
  );
}

const StyledDeleteSureButton = styled(Button).attrs(() => ({
  buttonTheme: "reset",
}))`
  background-color: ${(props) => props.color};
  color: ${colors.slate};
  ${getSureStyles}

  &:hover {
    ${getHoverStyles};
  }
`;

export { StyledDeleteSureButton };

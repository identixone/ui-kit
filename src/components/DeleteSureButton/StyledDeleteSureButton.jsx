import styled, { css } from "styled-components";

import Button from "../Button";

import { colors } from "../../style";

function getHoverStyles({ isDisabled }) {
  return !isDisabled
    ? css`
        background-color: ${({ deleteColor }) => deleteColor};
        color: ${colors.whiteSimple};
      `
    : ``;
}

const DeleteSureButton = styled(Button).attrs(() => ({ buttonTheme: "reset" }))`
  background-color: ${(props) => props.color};
  color: ${colors.slate};

  ${({ isSure, deleteColor }) =>
    isSure && `background-color: ${deleteColor}; color: ${colors.whiteSimple};`}

  &:hover {
    ${getHoverStyles};
  }
`;

export default DeleteSureButton;

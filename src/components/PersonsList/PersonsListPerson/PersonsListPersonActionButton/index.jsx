import styled, { css } from "styled-components";

import { Button } from "../../../Button";

import { colors } from "../../../../themes/colors";

const sureStyles = css`
  color: ${colors.whiteSimple};
  background-color: ${colors.brownSimple};
  opacity: 1;
`;

const PersonsListPersonActionButton = styled(Button).attrs({
  buttonTheme: "reset",
})`
  margin-left: auto;
  width: 36px;
  border-radius: 4px;
  background-color: ${({ mode }) =>
    mode === "add" ? "green" : colors.grayBlueDark2};
  color: ${({ mode }) => (mode === "add" ? colors.whiteSimple : colors.black)};
  transition: opacity 120ms ease-in-out;
  flex-direction: column;
  padding-top: 8px;

  opacity: ${({ isHidden }) => {
    return isHidden ? 0 : 0.7;
  }};

  ${({ isSure, mode }) => isSure && mode === "remove" && sureStyles}
`;

export default PersonsListPersonActionButton;

export * from "./PersonsListPersonActionButtonIcon";

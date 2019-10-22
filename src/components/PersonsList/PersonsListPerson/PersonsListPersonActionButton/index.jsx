import styled, { css } from "styled-components";

import { Button } from "../../../Button";

import { colors } from "../../../../themes/colors";

function getModeStyles({ mode }) {
  return {
    add: css`
      color: ${colors.greenish};
    `,
    default: css`
      color: ${colors.bloodOrange};
    `,
  }[mode || "default"];
}

const PersonsListPersonActionButton = styled(Button).attrs({
  buttonTheme: "reset",
})`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  opacity: ${({ isHidden }) => {
    return isHidden ? 0 : 1;
  }};

  ${getModeStyles}
`;

export default PersonsListPersonActionButton;

export * from "./PersonsListPersonActionButtonIcon";

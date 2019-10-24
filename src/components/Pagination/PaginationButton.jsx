import styled, { css } from "styled-components";

import { Button } from "../Button";

import { colors } from "../../themes/colors";

export function getActiveStyles() {
  return css`
    color: ${colors.whiteSimple};
    background-color: ${colors.grayBlueLight};
  `;
}

export const PaginationButton = styled(Button).attrs(() => ({
  buttonTheme: "reset",
}))`
  &:hover {
    ${getActiveStyles}
  }
`;

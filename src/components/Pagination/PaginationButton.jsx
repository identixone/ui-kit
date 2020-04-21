import styled, { css } from "styled-components";

import { Button } from "../Button";

import { colors } from "../../style";

function getActiveStyles() {
  return css`
    color: ${colors.whiteSimple};
    background-color: ${colors.grayBlueLight};
  `;
}

const PaginationButton = styled(Button)`
  &:hover {
    ${getActiveStyles}
  }
`;

export { PaginationButton, getActiveStyles };

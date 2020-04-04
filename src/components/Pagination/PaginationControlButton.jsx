import styled, { css } from "styled-components";

import { PaginationButton } from "./PaginationButton";

import { colors } from "../../style";

const PaginationControlButton = styled(PaginationButton).attrs(() => ({
  fit: "square",
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: ${colors.slate};
  background-color: ${colors.iceBlue};
  /* Сделано для того, чтобы пагинация не прыгала при появлении/пропалдании стрелок */
  ${({ isHidden }) => {
    return (
      isHidden &&
      css`
        visibility: hidden;
      `
    );
  }}
`;

export { PaginationControlButton };

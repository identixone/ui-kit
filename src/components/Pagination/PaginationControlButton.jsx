import styled from "styled-components";

import { PaginationButton } from "./PaginationButton";

import { colors } from "../../themes/colors";

export const PaginationControlButton = styled(PaginationButton).attrs(() => ({
  fit: "square",
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: ${colors.slate};
  background-color: ${colors.iceBlue};
  /* Сделано для того, чтобы пагинация не прыгала при появлении/пропалдании стрелок */
  visibility: ${({ hidden }) => (hidden ? "hidden" : "visible")};
`;

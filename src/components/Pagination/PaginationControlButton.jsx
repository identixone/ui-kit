import styled from "styled-components";

import { Button } from "../Button";
import { colors } from "../../themes/colors";

export const PaginationControlButton = styled(Button).attrs(() => ({
  size: "medium",
  buttonTheme: "reset",
  fit: "square",
}))`
  position: relative;
  border: 2px solid #fff;
  border-radius: 4px;
  background-color: #f0f1f2;
  color: ${colors.slate};
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${({ hidden }) => (hidden ? "hidden" : "visible")};

  &:hover {
    color: #fff;
    background-color: #6b7d85;
  }
`;

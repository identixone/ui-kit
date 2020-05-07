import styled from "styled-components";

import { PaginationButton, getActiveStyles } from "./PaginationButton";
import { colors } from "../../style";

const PaginationPageButton = styled(PaginationButton)`
  border-radius: 2px;
  height: 26px;
  min-width: 17px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.38;
  padding: 0 5px;
  color: ${colors.black};

  ${({ active }) => active && getActiveStyles()}

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export { PaginationPageButton };

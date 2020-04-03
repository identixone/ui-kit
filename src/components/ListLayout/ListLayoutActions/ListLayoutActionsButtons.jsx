import styled from "styled-components";

import { StyledButton } from "../../Button";

export const ListLayoutActionsButtons = styled.div`
  display: flex;

  ${StyledButton} {
    height: 34px;
    padding: 0 30px;

    &:not(:last-child) {
      margin-right: 11px;
    }
  }
`;

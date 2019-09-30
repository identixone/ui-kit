import styled from "styled-components";

import { StyledButton } from "../../../Button";

export const ListLayoutListActionsButtons = styled.div`
  display: flex;

  ${StyledButton} {
    &:not(:last-child) {
      margin-right: 11px;
    }
  }
`;

import styled from "styled-components";

import { StyledButton } from "../Button";

export const ListLayoutButtons = styled.div`
  ${StyledButton} {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

import styled from "styled-components";

import { StyledButton } from "../Button";

const PersonCardDetailedActions = styled.div`
  ${StyledButton} {
    width: 100%;

    &:not(:last-child) {
      margin-bottom: 11px;
    }
  }
`;

export { PersonCardDetailedActions };

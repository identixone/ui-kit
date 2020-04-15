import styled from "styled-components";

import { StyledButton } from "../Button";

const PersonCardDetailedActions = styled.div`
  ${StyledButton} {
    width: 100%;
    text-align: center;

    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;

export { PersonCardDetailedActions };

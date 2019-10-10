import styled from "styled-components";

import { StyledButton } from "../../../Button";

export const FormActions = styled.div`
  display: flex;

  ${StyledButton} {
    height: 38px;
    width: 104px;
    padding: 0 24px;

    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`;

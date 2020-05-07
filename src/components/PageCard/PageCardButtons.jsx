import styled from "styled-components";

import { StyledButton } from "../Button";

const PageCardButtons = styled.div`
  position: absolute;
  top: -4px;
  left: -10px;
  z-index: 1;
  display: flex;
  flex-direction: column;

  ${StyledButton} {
    &:not(:last-of-type) {
      margin-bottom: 8px;
    }
  }
`;

export { PageCardButtons };

import styled from "styled-components";

import { StyledFormCheckboxGroupItem } from "./FormCheckboxGroupItem";

const StyledFormCheckboxGroup = styled.div`
  ${StyledFormCheckboxGroupItem} {
    &:not(:last-of-type) {
      margin-bottom: 12px;
    }
  }
`;

export { StyledFormCheckboxGroup };

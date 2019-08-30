import styled from "styled-components";

import { StyledFormField } from "../../form/components";

const StyledLoginForm = styled.form`
  text-align: center;

  ${StyledFormField} {
    &:not(:last-of-type) {
      margin-bottom: 20px;
    }
  }
`;

export default StyledLoginForm;

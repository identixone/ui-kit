import styled from "styled-components";

import { StyledFormField } from "../../form/components";

const LoginFormForm = styled.form`
  text-align: center;

  ${StyledFormField} {
    &:not(:last-of-type) {
      margin-bottom: 20px;
    }
  }
`;

export default LoginFormForm;

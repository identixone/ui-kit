import styled from "styled-components";

import { StyledFormField } from "../../../ui/components/form/elements";

const StyledDateTimeForm = styled.form`
  text-align: center;

  ${StyledFormField} {
    display: inline-block;
    margin-left: 5px;
    &:not(:last-of-type) {
      margin-bottom: 15px;
    }
  }
`;

export default StyledDateTimeForm;

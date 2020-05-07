import styled from "styled-components";

import { colors } from "../../../../style";

const FormMultiSelectInput = styled.input`
  display: inline-block;
  width: 350px;
  border: none;
  outline: none;
  color: ${colors.darkBlack};
  font-size: 16px;
  line-height: 18px;
  background-color: transparent;

  ::placeholder {
    color: ${colors.darkBlack};
  }
`;

export { FormMultiSelectInput };

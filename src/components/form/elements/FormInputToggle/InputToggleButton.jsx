import styled from "styled-components";

import Button from "../.../Button";

import { FormUneditableFieldStyles } from "../FormUneditableField/StyledFormUneditableField";

const InputToggleButton = styled(Button).attrs({ buttonTheme: "reset" })`
  ${FormUneditableFieldStyles}

  text-decoration: underline dotted;
  border-bottom: 1px dotted
    ${({ hasValue }) => (!hasValue ? "#000" : "transparent")};
`;

export default InputToggleButton;

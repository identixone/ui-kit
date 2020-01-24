import styled from "styled-components";

import { Button } from "../../../Button";
import { FormUneditableFieldStyles } from "../FormUneditableField/StyledFormUneditableField";

import { colors } from "../../../../themes/colors";

const FormInputToggleButton = styled(Button).attrs(() => ({
  buttonTheme: "reset",
  isRounded: false,
}))`
  ${FormUneditableFieldStyles}
  /* 11px - смещение инпута влево */
  width: calc(100% - 11px);
  text-decoration: underline dotted;
  border-bottom: 1px dotted
    ${({ hasContent }) => (hasContent ? "transparent" : colors.black)};
`;

export { FormInputToggleButton };

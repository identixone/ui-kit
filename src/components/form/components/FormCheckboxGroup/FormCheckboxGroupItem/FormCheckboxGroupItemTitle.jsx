import styled, { css } from "styled-components";

import { FormLabelTitle } from "../../FormLabel";

function getStyles({ checked }) {
  return checked
    ? css`
        font-weight: bold;
      `
    : null;
}

const FormCheckboxGroupItemTitle = styled(FormLabelTitle)`
  font-size: 16px;
  line-height: 26px;

  ${getStyles}
`;

export { FormCheckboxGroupItemTitle };

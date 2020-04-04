import styled, { css } from "styled-components";

import { FormCheckboxCheckedIcon } from "./FormCheckboxCheckedIcon";

import { colors } from "../../../../style";

function getStyles({ disabled }) {
  if (disabled) {
    return css`
      background-color: ${colors.grayLight};
      border-color: ${colors.grayWhite};
      color: ${colors.grayWhite};
    `;
  }

  return css`
    background-color: ${colors.whiteSimple};
    border-color: ${colors.grayDark};
    color: ${colors.slate};
  `;
}

const StyledFormCheckbox = styled.label`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  position: relative;
  box-sizing: border-box;
  display: block;
  text-align: center;
  border: 1px solid;
  border-radius: 3px;
  transition: background-color 120ms ease-in-out, border-color 120ms ease-in-out;
  width: 22px;
  height: 22px;

  ${getStyles}

  ${FormCheckboxCheckedIcon} {
    width: 10px;
    height: 100%;
  }
`;

export { StyledFormCheckbox };

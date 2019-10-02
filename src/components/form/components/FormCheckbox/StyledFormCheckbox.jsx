import styled, { css } from "styled-components";

import { colors } from "../../../../themes/colors";

function getStyles({ disabled, checked }) {
  if (disabled) {
    return css`
      background-color: ${colors.grayLight};
      border-color: #dadada;

      &:hover {
        background-color: ${colors.grayLight};
      }
    `;
  }

  if (checked) {
    return css`
      background-color: ${colors.slate};
      border-color: ${colors.slate};

      &:hover {
        background-color: ${colors.brownGray};
        border-color: ${colors.brownGray};
      }
    `;
  }

  return css`
    background-color: ${colors.whiteSimple};
    border-color: #dadada;

    &:hover {
      background-color: #f2f5f7;
    }
  `;
}

const StyledFormCheckbox = styled.label`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  position: relative;

  box-sizing: border-box;
  display: block;

  width: 24px;
  height: 24px;
  border: 1px solid;
  border-radius: 2px;
  transition: background-color 120ms ease-in-out, border-color 120ms ease-in-out;

  ${getStyles}
`;

export default StyledFormCheckbox;

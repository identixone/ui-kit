import { css } from "styled-components";

import { FormCheckboxFlag } from "./FormCheckboxFlag";

import { colors } from "../../../../themes/colors";

const lightTheme = css`
  ${({ checked, disabled }) => {
    if (disabled) {
      return css`
        background-color: ${colors.grayLight};
        border-color: ${colors.grayMedium};
      `;
    }

    if (checked) {
      return css`
        background-color: ${colors.whiteSimple};
        border-color: ${colors.slate};

        &:hover {
          background-color: #f2f5f7;
        }
      `;
    }

    return css`
      background-color: ${colors.whiteSimple};
      border-color: #9aa7b3;
    `;
  }}

  ${FormCheckboxFlag}:before {
    border-color: ${colors.slate};
  }
`;

const darkTheme = css`
  ${({ checked, disabled }) => {
    if (disabled) {
      return css`
        background-color: ${colors.grayLight};
        border-color: ${colors.grayMedium};
      `;
    }

    if (checked) {
      return css`
        background-color: ${colors.slate};
        border-color: ${colors.slate};

        &:hover {
          background-color: #6e7b88;
          border-color: #6e7b88;
        }
      `;
    }

    return css`
      background-color: ${colors.whiteSimple};
      border-color: ${colors.grayMedium};

      &:hover {
        background-color: #f2f5f7;
      }
    `;
  }}

  ${FormCheckboxFlag}:before {
    border-color: ${colors.whiteSimple};
  }
`;

export default {
  light: lightTheme,
  dark: darkTheme,
};

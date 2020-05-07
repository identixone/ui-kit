import { css } from "styled-components";

import { colors } from "../../style";

function getPseudoForShadow() {
  return css`
    position: relative;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
    }

    &:hover:after {
      opacity: 1;
    }
  `;
}

const resetTheme = css`
  background-color: transparent;
`;

const disabledTheme = css`
  color: ${colors.whiteSimple};
  background-color: ${colors.grayWhite};
`;

const lightTheme = css`
  color: ${colors.darkBlack};
  background-color: ${colors.blueWhite};
  &:hover {
    background-color: ${colors.slate};
    color: ${colors.whiteSimple};
  }

  ${getPseudoForShadow}
`;

const darkTheme = css`
  color: ${colors.whiteSimple};
  background-color: ${colors.slate};
  ${getPseudoForShadow}
`;

const blueTheme = css`
  color: ${colors.whiteSimple};
  background-color: #1a5d7b;
  ${getPseudoForShadow}
`;

const greenTheme = css`
  color: ${colors.whiteSimple};
  background-color: ${colors.lightGreen};
  ${getPseudoForShadow}
`;

const outlineTheme = css`
  color: ${colors.slate};
  border: 1px solid ${colors.slate};
  &:hover {
    color: ${colors.whiteSimple};
    background-color: ${colors.slate};
  }

  ${getPseudoForShadow}
  &:after {
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
  }
`;

export default {
  reset: resetTheme,
  disabled: disabledTheme,
  light: lightTheme,
  dark: darkTheme,
  outline: outlineTheme,
  green: greenTheme,
  blue: blueTheme,
};

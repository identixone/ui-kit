import { css } from "styled-components";

import { colors } from "../../style";

function getPseudoForShadow({ isRounded, fit, disabled }) {
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
      border-radius: ${fit === "circle" ? "50%" : isRounded ? "3px" : "0px"};
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }

    &:hover:after {
      ${!disabled &&
        css`
           {
            opacity: 1;
          }
        `}
    }
  `;
}

const resetTheme = css`
  background-color: transparent;
`;

const disabledTheme = css`
  color: #aaa;
  background-color: #f3f3f3;
`;

const lightTheme = css`
  color: ${colors.slate};
  background-color: #e4e9eb;

  ${getPseudoForShadow}

  &:after {
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
  }

  ${({ disabled }) => {
    return disabled
      ? disabledTheme
      : css`
          &:hover {
            background-color: #3b4b5a;
            color: #fff;
          }
        `;
  }}
`;

const lighterTheme = css`
  color: #3b4b5a;
  background-color: #f3f3f3;
`;

const lighterGrayTheme = css`
  color: #3b4b5a;
  background-color: #9fa7ae;
`;

const darkTheme = css`
  color: #fff;
  background-color: #3b4b5a;

  ${getPseudoForShadow}

  &:after {
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
  }
`;

const blueTheme = css`
  color: #fff;
  background-color: #1a5d7b;

  ${getPseudoForShadow}

  &:after {
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
  }

  ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        background-color: #1a5d7b;
      }
    `}
`;

const ghostTheme = css`
  color: #fff;
  background-color: #ccc;
`;

const ghostDarkTheme = css`
  color: #3b4b5a;
  background-color: #f3f3f3;
`;

const activeTheme = css`
  background-color: #3b4b5a;
  color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
`;

const warningTheme = css`
  color: #fff;
  background-color: #ac3d03;
`;

const greenTheme = css`
  color: ${colors.whiteSimple};
  background-color: ${colors.lightGreen};
  ${getPseudoForShadow}
`;

const outlineTheme = css`
  color: ${colors.slate};
  border: 1px solid ${colors.slate};

  ${getPseudoForShadow}

  ${({ disabled }) =>
    !disabled
      ? css`
          &:hover {
            color: #fff;
            background-color: #3b4b5a;
          }
        `
      : css`
          opacity: 0.4;
        `} 
    

  &:after {
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
  }
`;

const outlineAccentTheme = css`
  color: ${colors.bloodOrange};
  border: 1px solid ${colors.bloodOrange};

  ${getPseudoForShadow}

  ${({ disabled }) =>
    !disabled
      ? css`
          &:hover {
            color: #fff;
            background-color: ${colors.bloodOrange};
          }
        `
      : css`
          opacity: 0.4;
        `} 
    

  &:after {
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
  }
`;

export default {
  light: lightTheme,
  dark: darkTheme,
  blue: blueTheme,
  ghost: ghostTheme,
  "ghost-dark": ghostDarkTheme,
  active: activeTheme,
  warning: warningTheme,
  reset: resetTheme,
  lighter: lighterTheme,
  disabled: disabledTheme,
  "light-gray": lighterGrayTheme,
  outline: outlineTheme,
  "outline-accent": outlineAccentTheme,
  green: greenTheme,
};

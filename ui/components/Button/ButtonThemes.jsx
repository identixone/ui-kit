import { css } from "styled-components";

const resetTheme = css`
  background-color: transparent;
`;

const disabledTheme = css`
  color: #aaa;
  background-color: #f3f3f3;
  cursor: default;
`;

const lightTheme = css`
  color: #3b4b5a;
  background-color: #f3f3f3;

  ${({ disabled }) => {
    return disabled
      ? `
        color: #aaa;
        background-color: #f3f3f3;
        cursor: default;
    `
      : `
      &:hover {
        background-color: #3b4b5a;
        color: #fff;
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
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

  &:hover {
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
  }
`;

const blueTheme = css`
  color: #fff;
  background-color: #167097;

  &:hover {
    background-color: #167097;
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
  }
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
};

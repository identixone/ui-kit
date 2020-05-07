import styled, { css } from "styled-components";

import { colors } from "../../style";
import { CardSmallData } from "./index";

const themes = {
  light: {
    backgroundColor: colors.whiteGrayLight,
    textColor: colors.darkBlack,
  },
  dark: {
    backgroundColor: colors.slate,
    textColor: colors.whiteSimple,
  },
};

function getStyles({ hasPhoto }) {
  return (
    hasPhoto &&
    css`
      ${CardSmallData} {
        position: absolute;
        padding-left: 109px;
      }
    `
  );
}

const StyledCardSmall = styled.li`
  width: 278px;
  height: 94px;
  border-radius: 4px;
  display: flex;
  position: relative;
  overflow: hidden;
  transition: background-color 120ms ease-in-out, color 120ms ease-in-out;

  background-color: ${({ theme }) => themes[theme.theme].backgroundColor};
  color: ${({ theme }) => themes[theme.theme].textColor};

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }

  ${getStyles}
`;

export { StyledCardSmall };

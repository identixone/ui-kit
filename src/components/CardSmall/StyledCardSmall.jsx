import styled from "styled-components";

import { colors } from "../../themes/colors";

const themes = {
  light: {
    backgroundColor: colors.iceBlue,
    textColor: colors.brownGray,
  },
  dark: {
    backgroundColor: colors.slate,
    textColor: colors.whiteSimple,
  },
};

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
`;

export { StyledCardSmall };

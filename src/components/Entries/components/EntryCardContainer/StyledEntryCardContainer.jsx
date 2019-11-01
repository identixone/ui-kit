import styled, { css } from "styled-components";

import { EntryCardActions } from "../EntryCardActions";
import { StyledEntryCardPhoto } from "../EntryCardPhotos";
import { StyledEntryCardEntryType } from "../EntryCardEntryType";
import { StyledEntryCardInfoItem } from "../EntryCardInfoItem";
import { StyledEntryCardLiveness } from "../EntryCardLiveness";

import { colors } from "../../../../themes/index";

const themes = {
  light: {
    backgroundColor: colors.whiteGray,
    textColor: colors.black,
    livenessColor: colors.gray,
  },
  dark: {
    backgroundColor: colors.slate,
    textColor: colors.whiteSimple,
    livenessColor: "#E7EFF2",
  },
};

function getStyles({ deleted }) {
  return deleted
    ? css`
        opacity: 0.4;
      `
    : null;
}

const StyledEntryCardContainer = styled.li`
  width: 100%;
  display: flex;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  line-height: 18px;
  background-color: ${({ theme }) => themes[theme.theme].backgroundColor};

  ${getStyles}

  ${StyledEntryCardPhoto} {
    color: ${({ theme }) => themes[theme.theme].textColor};
  }

  ${StyledEntryCardEntryType} {
    color: ${({ theme }) => themes[theme.theme].textColor};
  }

  ${StyledEntryCardInfoItem} {
    color: ${({ theme }) => themes[theme.theme].textColor};
  }

  ${StyledEntryCardLiveness} {
    color: ${({ theme }) => themes[theme.theme].livenessColor};
  }

  ${EntryCardActions} {
    opacity: 0;
  }

  &:hover {
    ${EntryCardActions} {
      opacity: 1;
    }
  }
`;

export { StyledEntryCardContainer };

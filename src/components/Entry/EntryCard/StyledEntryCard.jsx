import styled, { css } from "styled-components";

import {
  EntryCardContainer,
  EntryCardPhotos,
  StyledEntryCardPhoto,
  StyledEntryCardEntryType,
  EntryCardInfoColumn,
  EntryCardInfoItem,
  EntryCardInfoItemLabel,
} from "../components";

import { colors } from "../../../themes/colors";

function getStyles({ deleted }) {
  return deleted
    ? css`
        opacity: 0.4;
      `
    : null;
}

const StyledEntryCard = styled(EntryCardContainer)`
  height: 121px;
  padding: 19px 10px 10px 30px;
  background-color: ${colors.whiteGray};
  border-radius: 4px;

  ${getStyles}

  ${EntryCardPhotos} {
    margin-right: 30px;
  }

  ${StyledEntryCardPhoto} {
    &:not(:last-of-type) {
      margin-right: 5px;
    }
  }

  ${StyledEntryCardEntryType} {
    margin-right: 30px;
  }

  ${EntryCardInfoColumn} {
    &:not(:last-child) {
      margin-right: 30px;
    }
  }

  ${EntryCardInfoItem} {
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }

  ${EntryCardInfoItemLabel} {
    width: 100px;
  }
`;

export { StyledEntryCard };

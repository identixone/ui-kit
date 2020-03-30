import styled from "styled-components";

import {
  EntryCardContainer,
  StyledEntryCardEntryType,
  EntryCardInfo,
  EntryCardInfoColumn,
  StyledEntryCardInfoItem,
  EntryCardInfoItemLabel,
  EntryCardInfoItemValue,
  StyledEntryCardLiveness,
} from "../components";

import { colors } from "../../../themes/colors";

const themes = {
  light: {
    backgroundColor: "transparent",
  },
  dark: {
    backgroundColor: colors.slate,
  },
};

const StyledEntryPersonCard = styled(EntryCardContainer)`
  height: 130px;
  padding: 15px 0 10px 48px;
  background-color: ${({ theme }) => themes[theme].backgroundColor};

  &:not(:last-child) {
    border-bottom: 1px solid #f1f1f1;
  }

  ${StyledEntryCardEntryType} {
    margin-right: 70px;
  }

  ${EntryCardInfo} {
    padding-top: 8px;
  }

  ${EntryCardInfoColumn} {
    &:not(:last-of-type) {
      width: 160px;
      margin-right: 60px;
    }
  }

  ${StyledEntryCardInfoItem} {
    flex-direction: column;

    &:not(:last-child) {
      margin-bottom: 14px;
    }
  }

  ${EntryCardInfoItemLabel} {
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    text-transform: uppercase;
  }

  ${EntryCardInfoItemValue} {
    font-weight: 300;
  }

  ${StyledEntryCardLiveness} {
    left: -60px;
  }
`;

export { StyledEntryPersonCard };

import styled from "styled-components";

import {
  EntryCardContainer,
  EntryCardInfoColumn,
  EntryCardInfoItemLabel,
  StyledEntryCardLiveness,
  EntryCardActions,
} from "../components";

import { colors } from "../../../style";

const themes = {
  light: {
    backgroundColor: "transparent",
  },
  dark: {
    backgroundColor: colors.slate,
  },
};

const StyledEntryPersonCard = styled(EntryCardContainer)`
  height: 100px;
  max-width: 890px;
  background-color: ${({ theme }) => themes[theme].backgroundColor};
  align-items: center;
  padding: 0;

  &:not(:last-child) {
    border-bottom: 1px solid #f1f1f1;
  }

  ${EntryCardActions} {
    top: 50%;
    transform: translateY(-50%);
  }

  ${EntryCardInfoColumn} {
    &:first-of-type {
      ${EntryCardInfoItemLabel} {
        width: 114px;
      }
    }

    &:last-of-type {
      ${EntryCardInfoItemLabel} {
        width: 123px;
      }
    }

    &:not(:last-of-type) {
      width: 260px;
      margin-right: 54px;
    }
  }

  ${StyledEntryCardLiveness} {
    left: 120px;
    line-height: 60px;
  }
`;

export { StyledEntryPersonCard };

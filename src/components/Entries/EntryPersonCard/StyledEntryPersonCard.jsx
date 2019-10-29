import styled from "styled-components";

import {
  EntryCardContainer,
  StyledEntryCardEntryType,
  EntryCardInfoColumn,
  StyledEntryCardInfoItem,
  EntryCardInfoItemLabel,
  EntryCardInfoItemValue,
  StyledEntryCardLiveness,
} from "../components";

const StyledEntryPersonCard = styled(EntryCardContainer)`
  height: 130px;
  padding: 15px 0 10px 45px;
  background-color: transparent;

  &:not(:last-child) {
    border-bottom: 1px solid #f1f1f1;
  }

  ${StyledEntryCardEntryType} {
    margin-right: 70px;
  }

  ${EntryCardInfoColumn} {
    &:not(:last-of-type) {
      margin-right: 70px;
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

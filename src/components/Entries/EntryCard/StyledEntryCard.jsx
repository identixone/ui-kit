import styled from "styled-components";

import {
  EntryCardContainer,
  EntryCardPhotos,
  StyledEntryCardPhoto,
  StyledEntryCardEntryType,
  EntryCardInfoColumn,
  StyledEntryCardInfoItem,
  EntryCardInfoItemLabel,
  StyledEntryCardLiveness,
} from "../components";

import { colors } from "../../../themes/colors";

const StyledEntryCard = styled(EntryCardContainer)`
  height: 121px;
  padding: 19px 10px 10px 28px;
  background-color: ${colors.whiteGray};
  border-radius: 4px;

  ${EntryCardPhotos} {
    margin-right: 30px;
  }

  ${StyledEntryCardPhoto} {
    &:not(:last-of-type) {
      margin-right: 7px;
    }
  }

  ${StyledEntryCardEntryType} {
    margin-right: 30px;
  }

  ${EntryCardInfoColumn} {
    &:not(:last-of-type) {
      width: 260px;
      margin-right: 20px;
    }
  }

  ${StyledEntryCardInfoItem} {
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }

  ${EntryCardInfoItemLabel} {
    width: 105px;
  }

  ${StyledEntryCardLiveness} {
    left: -30px;
  }
`;

export { StyledEntryCard };

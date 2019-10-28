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
  padding: 19px 10px 10px 30px;
  background-color: ${colors.whiteGray};
  border-radius: 4px;

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

  ${StyledEntryCardInfoItem} {
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }

  ${EntryCardInfoItemLabel} {
    width: 100px;
  }

  ${StyledEntryCardLiveness} {
    left: -30px;
  }
`;

export { StyledEntryCard };

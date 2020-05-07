import styled from "styled-components";

import {
  EntryCardContainer,
  EntryCardPhotos,
  StyledEntryCardPhoto,
  EntryCardInfoColumn,
  EntryCardInfoItemLabel,
  StyledEntryCardLiveness,
} from "../components";
import { EntryCardPhotoBadges } from "../components/EntryCardPhotos/EntryCardPhoto/EntryCardPhotoBadges";

const StyledEntryCard = styled(EntryCardContainer)`
  height: 114px;
  padding: 10px 16px;
  border-radius: 4px;

  ${EntryCardPhotos} {
    margin-right: 25px;
  }

  ${StyledEntryCardPhoto} {
    &:not(:last-of-type) {
      margin-right: 8px;
    }
  }

  ${EntryCardInfoColumn} {
    &:first-of-type {
      ${EntryCardInfoItemLabel} {
        width: 93px;
      }
    }

    &:last-of-type {
      ${EntryCardInfoItemLabel} {
        width: 56px;
      }
    }

    &:not(:last-of-type) {
      width: 280px;
      margin-right: 34px;
    }
  }

  ${EntryCardPhotoBadges} {
    top: -4px;
  }

  ${StyledEntryCardLiveness} {
    left: -20px;
  }
`;

export { StyledEntryCard };

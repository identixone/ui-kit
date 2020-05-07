import styled from "styled-components";

import {
  EntryCardContainer,
  EntryCardInfo,
  EntryCardInfoColumn,
  EntryCardInfoItemLabel,
  EntryCardActions,
} from "../components";

import { colors } from "../../../style";

const StyledPersonEntriesCard = styled(EntryCardContainer)`
  border-radius: 4px;
  background-color: ${colors.whiteSimple};
  box-shadow: 0px 0px 80px rgba(162, 182, 189, 0.2);
  overflow: hidden;

  ${EntryCardInfo} {
    padding: 18px 18px 18px 60px;
  }

  ${EntryCardInfoColumn} {
    &:first-of-type {
      ${EntryCardInfoItemLabel} {
        width: 122px;
      }
    }

    &:last-of-type {
      ${EntryCardInfoItemLabel} {
        width: 161px;
      }
    }

    &:not(:last-of-type) {
      width: 260px;
      margin-right: 55px;
    }
  }

  ${EntryCardActions} {
    opacity: 1;
  }
`;

export { StyledPersonEntriesCard };

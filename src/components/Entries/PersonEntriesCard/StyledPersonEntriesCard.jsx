import styled from "styled-components";

import {
  EntryCardContainer,
  EntryCardActions,
  EntryCardActionsButton,
  EntryCardInfo,
  EntryCardInfoColumn,
  StyledEntryCardInfoItem,
  EntryCardInfoItemLabel,
  EntryCardInfoItemValue,
} from "../components";

const StyledPersonEntriesCard = styled(EntryCardContainer)`
  background-color: transparent;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 0px 30px 0px rgba(162, 182, 189, 0.25);

  ${EntryCardInfo} {
    padding: 20px 20px 20px 40px;
  }

  ${EntryCardInfoColumn} {
    &:not(:last-of-type) {
      width: 305px;
      margin-right: 48px;
    }
  }

  ${StyledEntryCardInfoItem} {
    line-height: 22px;
  }

  ${EntryCardInfoItemLabel} {
    width: 157px;
    font-weight: 600;
  }

  ${EntryCardInfoItemValue} {
    font-weight: 300;
  }

  ${EntryCardActions} {
    opacity: 1;
  }

  ${EntryCardActionsButton} {
    line-height: 32px;
  }
`;

export { StyledPersonEntriesCard };

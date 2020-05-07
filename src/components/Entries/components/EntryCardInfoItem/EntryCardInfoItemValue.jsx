import styled from "styled-components";

import { ValueSpan } from "../../../ValueSpan";
import { StyledCopyItem } from "../../../CopyItem";

const EntryCardInfoItemValue = styled(ValueSpan)`
  font-size: 14px;
  line-height: 18px;
  font-weight: 300;

  ${StyledCopyItem} {
    font-size: 14px;
    line-height: 18px;
    font-weight: 300;
    display: inline;
  }
`;

export { EntryCardInfoItemValue };

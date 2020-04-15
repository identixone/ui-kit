import styled from "styled-components";

import { ValueSpan } from "../../../ValueSpan";
import { colors } from "../../../../style";

const PersonCardDetailedDataItemValue = styled(ValueSpan)`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: ${colors.darkBlack};
`;

export { PersonCardDetailedDataItemValue };

import styled from "styled-components";

import { PersonCardDetailedDataItemValue } from "./PersonCardDetailedDataItemValue";

import { colors } from "../../../../style";

const PersonCardDetailedDataItemIdValue = styled(
  PersonCardDetailedDataItemValue
)`
  padding-right: 2px;
  padding-left: 2px;
  background-color: ${colors.orangeDark};
`;

export { PersonCardDetailedDataItemIdValue };

import styled from "styled-components";

import { PersonsListPersonDetailInfoItemValue } from "./PersonsListPersonDetailInfoItemValue";

import { colors } from "../../../../../themes/index";

export const PersonsListPersonDetailInfoItemIdValue = styled(
  PersonsListPersonDetailInfoItemValue
)`
  padding-right: 2px;
  padding-left: 2px;
  background-color: ${colors.orangeDark};
`;

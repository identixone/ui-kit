import styled from "styled-components";

export const PersonsListPersonDetailInfoItem = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  display: flex;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export * from "./PersonsListPersonDetailInfoItemLabel";
export * from "./PersonsListPersonDetailInfoItemValue";
export * from "./PersonsListPersonDetailInfoItemIdValue";
export * from "./PersonsListPersonDetailInfoItemPhoto";

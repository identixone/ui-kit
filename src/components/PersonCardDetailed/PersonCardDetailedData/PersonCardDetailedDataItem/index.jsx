import styled from "styled-components";

const PersonCardDetailedDataItem = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  display: flex;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export * from "./PersonCardDetailedDataItemLabel";
export * from "./PersonCardDetailedDataItemValue";
export * from "./PersonCardDetailedDataItemIdValue";
export * from "./PersonCardDetailedDataItemPhoto";

export { PersonCardDetailedDataItem };

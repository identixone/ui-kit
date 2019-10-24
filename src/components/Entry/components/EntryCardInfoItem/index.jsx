import styled from "styled-components";

const EntryCardInfoItem = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export { EntryCardInfoItem };
export * from "./EntryCardInfoItemLabel";
export * from "./EntryCardInfoItemValue";

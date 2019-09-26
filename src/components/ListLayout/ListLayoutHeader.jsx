import styled from "styled-components";

export const ListLayoutHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;

  &:not(:last-child) {
    margin-bottom: 13px;
  }
`;

import styled from "styled-components";

export const ListLayoutHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

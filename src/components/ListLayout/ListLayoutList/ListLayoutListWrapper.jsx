import styled, { css } from "styled-components";

export const ListLayoutListWrapper = styled.div`
  min-height: 221px;

  &:not(:only-child) {
    width: 576px;
    margin-right: 30px;
  }

  &:only-child {
    width: 100%;
  }

  ${({ centered }) =>
    centered &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;

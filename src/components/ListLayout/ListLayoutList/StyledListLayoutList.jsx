import styled from "styled-components";

import { StyledListLayoutListItem } from "./ListLayoutListItem";

export const StyledListLayoutList = styled.ul`
  padding-left: 0;
  margin: 0;
  list-style-type: none;
  min-height: 350px;
  column-count: ${({ columns }) => columns};
  column-gap: 20px;

  &:not(:only-child) {
    margin-bottom: 27px;
  }

  &:not(:first-child) {
    ${StyledListLayoutListItem} {
      border-top: 1px solid #dadada;
    }
  }
`;

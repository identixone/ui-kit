import styled from "styled-components";

import { colors } from "../../../style";

export const StyledListLayoutList = styled.ul`
  padding-left: 0;
  margin: 0;
  list-style-type: none;
  min-height: 220px;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    ${({ columns }) => `calc(${100 / columns}% - ${10 * (columns - 1)}px)`}
  );
  grid-auto-rows: max-content;
  grid-column-gap: 20px;

  &:not(:only-child) {
    margin-bottom: 27px;
  }

  &:not(:first-child) {
    border-top: 1px solid ${colors.grayMedium};
  }
`;

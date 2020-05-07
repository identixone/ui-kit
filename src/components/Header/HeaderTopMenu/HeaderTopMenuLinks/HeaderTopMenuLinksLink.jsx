import styled from "styled-components";

import { colors } from "../../../../style/color";

export const HeaderTopMenuLinksLink = styled.a.attrs(() => ({
  target: "_blank",
}))`
  color: ${colors.darkBlack};
  text-decoration: none;
  font-size: 13px;
  line-height: 18px;
  font-weight: 700;
  border-bottom: 1px solid transparent;
  box-sizing: border-box;
  text-transform: lowercase;

  &:not(:last-child) {
    margin-right: 32px;
  }

  &:hover {
    border-bottom: 1px solid #ffc228;
  }
`;

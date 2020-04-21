import styled, { css } from "styled-components";

import BadgeThemes from "./UIBadgeThemes";

import { colors } from "../../style";

export const UIBadge = styled.span`
  border-radius: 22.5px;
  text-align: center;
  font-size: 13px;
  line-height: 18px;
  font-weight: normal;
  padding: 0 8px;
  ${({ badgeTheme }) => BadgeThemes[badgeTheme]}

  ${({ color }) =>
    color
      ? css`
          background-color: ${color};
          color: ${colors.whiteSimple};
        `
      : null}
`;

UIBadge.defaultProps = {
  badgeTheme: "gray",
};

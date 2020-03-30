import styled, { css } from "styled-components";

import { Button } from "@identixone/ui-kit/src/components/Button";
import { colors } from "@identixone/ui-kit/src/themes/colors";

const EntriesDateTimeFilterTabsTabbarButton = styled(Button).attrs(() => ({
  buttonTheme: "reset",
}))`
  padding: 0;
  font-size: 13px;
  font-weight: bold;
  line-height: 1.38;

  ${({ isActive }) =>
    isActive
      ? css`
          color: ${colors.darkBlack};
        `
      : css`
          color: #a8b3be;
        `}

  &:not(:last-child) {
    margin-right: 14px;
  }
`;

export { EntriesDateTimeFilterTabsTabbarButton };

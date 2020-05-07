import styled, { css } from "styled-components";

import { Button } from "../../../Button";
import { colors } from "../../../../style";

const DatePickerTabsTabbarButton = styled(Button)`
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

export { DatePickerTabsTabbarButton };

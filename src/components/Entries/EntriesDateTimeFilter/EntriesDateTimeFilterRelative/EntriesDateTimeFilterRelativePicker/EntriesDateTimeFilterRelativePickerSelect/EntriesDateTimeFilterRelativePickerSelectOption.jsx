import styled, { css } from "styled-components";

import { Button } from "@identixone/ui-kit/src/components/Button";
import { colors } from "@identixone/ui-kit/src/themes/colors";

const EntriesDateTimeFilterRelativePickerSelectOption = styled(
  Button
).attrs(() => ({ buttonTheme: "reset" }))`
  font-size: 12px;
  font-weight: 600;
  height: 32px;
  width: 38px;
  border-radius: 4px;
  padding: 0;

  ${({ isSelected }) =>
    isSelected
      ? css`
          background-color: ${colors.slate};
          color: ${colors.whiteSimple};
        `
      : css`
          background-color: ${colors.whiteGrayLight};
          color: #a8b3be;
        `};

  &:not(:last-child) {
    margin-right: 12px;
  }
`;

export { EntriesDateTimeFilterRelativePickerSelectOption };

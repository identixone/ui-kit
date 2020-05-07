import styled, { css } from "styled-components";

import { Button } from "../../../../Button";
import { colors } from "../../../../../style";

const DatePickerRelativePickerSelectOption = styled(Button)`
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
        `}

  &:not(:last-child) {
    margin-right: 12px;
  }
`;

export { DatePickerRelativePickerSelectOption };

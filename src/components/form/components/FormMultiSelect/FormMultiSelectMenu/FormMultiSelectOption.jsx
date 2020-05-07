import styled, { css } from "styled-components";

import { colors } from "../../../../../style";

function getStyles({ isHighlighted }) {
  if (isHighlighted) {
    return css`
      background-color: ${colors.whiteGrayLight};
    `;
  }
}

const FormMultiSelectOption = styled.li`
  font-size: 16px;
  line-height: 26px;
  padding: 6px 18px;
  cursor: pointer;
  color: ${colors.darkBlack};
  ${getStyles}
`;

export { FormMultiSelectOption };

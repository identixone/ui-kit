import styled, { css } from "styled-components";

import { textTrimStyles } from "../../../Text/TextTrim";

import { colors } from "../../../../themes/colors";

const FormDropdownOption = styled.li`
  ${textTrimStyles}
  color: #263238;
  line-height: 1.5;
  padding: 4px 15px;
  transition: background-color 120ms ease-in-out;
  ${({ isHighlighted }) => {
    return isHighlighted
      ? css`
          background-color: #f5f5f5;
        `
      : css`
          &:hover {
            background-color: ${colors.whiteSimple};
          }
        `;
  }};

  ${({ disabled }) => {
    return disabled
      ? css`
          border-color: #546e7a;
          opacity: 0.5;
        `
      : css`
          &:hover {
            background-color: #f5f5f5;
          }
        `;
  }}
`;

export { FormDropdownOption };

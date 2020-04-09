import styled, { css } from "styled-components";

import { textTrimStyles } from "../../../Text/TextTrim";

import { colors } from "../../../../style";

const FormDropdownOption = styled.li`
  ${textTrimStyles}
  position: relative;
  color: ${colors.darkBlack};
  font-size: 16px;
  line-height: 1.63;
  transition: background-color 120ms ease-in-out;
  padding: 12px 36px;

  &:first-child {
    padding-top: 16px;
  }
  &:last-child {
    padding-bottom: 16px;
  }

  ${({ highlighted }) => {
    return highlighted
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

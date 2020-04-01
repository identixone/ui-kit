import styled, { css } from "styled-components";

import { colors } from "../../../../../themes/colors";

const FormMultiSelectMenu = styled.ul`
  list-style-type: none;
  position: absolute;
  padding-left: 0;
  box-shadow: 0px 0px 80px rgba(162, 182, 189, 0.2);
  border-radius: 4px;
  max-height: 288px;
  overflow-y: auto;
  z-index: 1;
  padding: 12px 0px;
  background-color: ${colors.whiteSimple};

  ${({ isOpen }) =>
    !isOpen &&
    css`
      visibility: hidden;
    `};
`;

export { FormMultiSelectMenu };

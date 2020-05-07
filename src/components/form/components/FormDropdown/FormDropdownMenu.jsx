import styled, { css } from "styled-components";

import { colors } from "../../../../style";

const FormDropdownMenu = styled.ul`
  box-sizing: border-box;
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  max-height: 260px;
  background-color: ${colors.whiteSimple};
  overflow-y: auto;
  z-index: 3;
  border-radius: 4px;
  box-shadow: 0 0 80px 0 #a2b6bd33;

  ${({ isOpen }) =>
    !isOpen &&
    css`
      display: none;
    `}
`;

export { FormDropdownMenu };

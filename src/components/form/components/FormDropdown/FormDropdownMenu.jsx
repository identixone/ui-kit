import styled, { css } from "styled-components";

import { colors } from "../../../../themes/colors";

const FormDropdownMenu = styled.ul`
  box-sizing: border-box;
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  position: absolute;
  top: 35px;
  width: 100%;
  max-height: 260px;
  border-radius: 0 0 3px 3px;
  border: 1px solid ${colors.grayLight};
  border-top: 0 ${colors.whiteSimple};
  background-color: ${colors.whiteSimple};
  box-shadow: 0px 10px 50px 0px rgba(180, 182, 183, 0.4);
  overflow-y: auto;
  z-index: 6;
  ${({ isOpen }) =>
    !isOpen &&
    css`
      visibility: hidden;
    `}
`;

export { FormDropdownMenu };

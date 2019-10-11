import styled, { css } from "styled-components";

import { colors } from "../../../themes/colors";

function getStyles({ isActive }) {
  return isActive
    ? css`
        color: ${colors.whiteSimple};
        background-color: ${colors.slate};

        b {
          color: ${colors.whiteSimple};
        }
      `
    : css`
        color: ${colors.brownGray};
        background-color: ${colors.iceBlue};

        b {
          color: ${colors.black};
        }
      `;
}

export const StyledPersonsListPerson = styled.li`
  width: 278px;
  height: 94px;
  border-radius: 4px;
  display: flex;
  position: relative;
  overflow: hidden;
  transition: background-color 120ms ease-in-out, color 120ms ease-in-out;

  ${getStyles}

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

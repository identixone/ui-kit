import styled, { css } from "styled-components";

import { colors } from "../../style";

function getStyles({ isImageLoaded }) {
  return !isImageLoaded
    ? css`
        background-color: ${colors.whiteGrayDark};

        img {
          display: none;
        }
      `
    : css`
        background-color: ${colors.whiteSimple};
      `;
}

export const StyledLazyImage = styled.span`
  display: block;
  ${getStyles}
`;

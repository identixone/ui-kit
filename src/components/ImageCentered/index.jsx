import styled, { css } from "styled-components";
import { LazyImage } from "../LazyImage";

import { withImageOrientation } from "./hocs/with-image-orientation";

function getStyles({ imgOrientation }) {
  return {
    portrait: css`
      img {
        width: 100%;
      }
    `,
    landscape: css`
      img {
        height: 100%;
      }
    `,
  }[imgOrientation || "portrait"];
}

export const StyledImageCentered = styled(LazyImage)`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  ${getStyles}
`;

export const ImageCentered = withImageOrientation(StyledImageCentered);

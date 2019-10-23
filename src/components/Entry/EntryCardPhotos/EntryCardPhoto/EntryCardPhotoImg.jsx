import styled, { css } from "styled-components";

import { ImageCentered } from "../../../ImageCentered";

const EntryCardPhotoImg = styled(ImageCentered)`
  border-radius: 6px;
  height: 85px;
  width: 85px;
  background-color: #f2f2f2;

  ${({ isVisible }) =>
    isVisible &&
    css`
      img {
        display: none;
      }
    `}
`;

export { EntryCardPhotoImg };

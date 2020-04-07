import React from "react";
import PropTypes from "prop-types";

import { StyledPersonCardDetailedDataItemPhoto } from "./StyledPersonCardDetailedDataItemPhoto";
import { PersonCardDetailedDataItemPhotoImg } from "./PersonCardDetailedDataItemPhotoImg";
import { PersonCardDetailedDataItemPhotoBadge } from "./PersonCardDetailedDataItemPhotoBadge";

export function PersonCardDetailedDataItemPhoto({ src, facesize }) {
  return (
    <StyledPersonCardDetailedDataItemPhoto>
      <PersonCardDetailedDataItemPhotoImg src={src} />
      {facesize && (
        <PersonCardDetailedDataItemPhotoBadge badgeTheme="blue">
          {facesize}
        </PersonCardDetailedDataItemPhotoBadge>
      )}
    </StyledPersonCardDetailedDataItemPhoto>
  );
}

PersonCardDetailedDataItemPhoto.propTypes = {
  src: PropTypes.string,
  facesize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

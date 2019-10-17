import React from "react";
import PropTypes from "prop-types";

import { StyledPersonsListPersonDetailInfoItemPhoto } from "./StyledPersonsListPersonDetailInfoItemPhoto";
import { PersonsListPersonDetailInfoItemPhotoImg } from "./PersonsListPersonDetailInfoItemPhotoImg";
import { PersonsListPersonDetailInfoItemPhotoBadge } from "./PersonsListPersonDetailInfoItemPhotoBadge";

import { noimage } from "../../../../../../assets/images";

export function PersonsListPersonDetailInfoItemPhoto({ src, facesize }) {
  return (
    <StyledPersonsListPersonDetailInfoItemPhoto>
      <PersonsListPersonDetailInfoItemPhotoImg src={src || noimage} />
      {facesize && (
        <PersonsListPersonDetailInfoItemPhotoBadge badgeTheme="blue">
          {facesize}
        </PersonsListPersonDetailInfoItemPhotoBadge>
      )}
    </StyledPersonsListPersonDetailInfoItemPhoto>
  );
}

PersonsListPersonDetailInfoItemPhoto.propTypes = {
  src: PropTypes.string,
  facesize: PropTypes.number,
};

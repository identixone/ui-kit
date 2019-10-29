import React from "react";
import PropTypes from "prop-types";

import { StyledEntryCardPhoto } from "./StyledEntryCardPhoto";
import { EntryCardPhotoImgContainer } from "./EntryCardPhotoImgContainer";
import { EntryCardPhotoImg } from "./EntryCardPhotoImg";
import { EntryCardPhotoTitle } from "./EntryCardPhotoTitle";
import { EntryCardPhotoFaceSize } from "./EntryCardPhotoFaceSize";

import noimage from "../../../../../assets/images/noimage.png";

function EntryCardPhoto({
  facesize,
  src,
  title,
  className,
  hidden,
  "data-testid": testId,
  "data-phototype": photoType,
}) {
  const photoToRender = src || noimage;

  return (
    <StyledEntryCardPhoto
      className={className}
      data-testid={testId}
      data-phototype={photoType}
      hidden={hidden}
    >
      <EntryCardPhotoTitle>{title}</EntryCardPhotoTitle>

      <EntryCardPhotoImgContainer>
        <EntryCardPhotoImg src={photoToRender} />
        {facesize && (
          <EntryCardPhotoFaceSize title="face area in pixels">
            {facesize}
          </EntryCardPhotoFaceSize>
        )}
      </EntryCardPhotoImgContainer>
    </StyledEntryCardPhoto>
  );
}

EntryCardPhoto.propTypes = {
  facesize: PropTypes.string,
  title: PropTypes.string,
  src: PropTypes.string,
  hidden: PropTypes.bool,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
  "data-phototype": PropTypes.string,
};

export {
  EntryCardPhoto,
  StyledEntryCardPhoto,
  EntryCardPhotoImg,
  EntryCardPhotoFaceSize,
};

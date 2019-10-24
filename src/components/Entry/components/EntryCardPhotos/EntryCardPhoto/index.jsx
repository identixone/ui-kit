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
  isHidden,
  "data-testid": testId,
}) {
  const photoToRender = src || noimage;

  return (
    <StyledEntryCardPhoto
      className={className}
      data-testid={testId}
      isHidden={isHidden}
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
  className: PropTypes.string,
  "data-testid": PropTypes.string,
  isHidden: PropTypes.bool,
};

export { EntryCardPhoto, StyledEntryCardPhoto };

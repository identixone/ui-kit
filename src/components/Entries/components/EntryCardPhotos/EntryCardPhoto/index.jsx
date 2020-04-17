import React from "react";
import PropTypes from "prop-types";

import { StyledEntryCardPhoto } from "./StyledEntryCardPhoto";
import { EntryCardPhotoImgContainer } from "./EntryCardPhotoImgContainer";
import { EntryCardPhotoImg } from "./EntryCardPhotoImg";
import { EntryCardPhotoTitle } from "./EntryCardPhotoTitle";
import { EntryCardPhotoFaceSize } from "./EntryCardPhotoFaceSize";
import { EntryCardPhotoReinit } from "./EntryCardPhotoReinit";
import { EntryCardPhotoBadges } from "./EntryCardPhotoBadges";

import noimage from "../../../../../assets/images/noimage.png";

function EntryCardPhoto({
  facesize,
  hasReinit,
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
      {title && <EntryCardPhotoTitle>{title}</EntryCardPhotoTitle>}

      <EntryCardPhotoImgContainer>
        <EntryCardPhotoImg src={photoToRender} />
        <EntryCardPhotoBadges>
          {facesize && (
            <EntryCardPhotoFaceSize>{facesize}</EntryCardPhotoFaceSize>
          )}
          {hasReinit && (
            <EntryCardPhotoReinit data-testid="person-entries-card-re">
              RE
            </EntryCardPhotoReinit>
          )}
        </EntryCardPhotoBadges>
      </EntryCardPhotoImgContainer>
    </StyledEntryCardPhoto>
  );
}

EntryCardPhoto.propTypes = {
  facesize: PropTypes.string,
  hasReinit: PropTypes.bool,
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

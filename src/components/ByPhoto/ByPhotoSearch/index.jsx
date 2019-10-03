import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { upperFirst } from "lodash-es";

import { FiltersUploadPhoto } from "../FiltersUploadPhoto";

import StyledByPhotoSearchPlace from "./StyledByPhotoSearchPlace";
import { TextDrag } from "../../Text/TextDrag";
import StyledByPhotoSearchPlaceGray from "./StyledByPhotoSearchPlaceGray";
import StyledPlaceColor from "../StyledPlaceColor";
import StyledRoundButtonColor from "../StyledRoundButtonColor";
import StyledByPhotoSearchRoundButton from "./StyledByPhotoSearchRoundButton";

import { AngleRight, Times } from "../../../assets/icons";

const ERROR_CLEAR_TIMER = 5000;

export default function ByPhotoSearch({
  personSearchResult,
  clearResult,
  componentDidFetch,
  handleUploadFile,
  error,
  hasDropped,
}) {

  function handleClickLink (e) {
    e.stopPropagation();
  }

  function renderContent() {
    const isHaveResults = personSearchResult || error;
    return isHaveResults ? (
      error ? (
        <div>
          <StyledByPhotoSearchPlace>
            Error {error.status}
          </StyledByPhotoSearchPlace>
          <span>{error.data.detail || "No person found in database"}</span>
        </div>
      ) : (
        <div>
          <StyledByPhotoSearchPlace>Person found</StyledByPhotoSearchPlace>
          <ThemeProvider theme={{ mode: personSearchResult.conf }}>
            <StyledPlaceColor>
              {upperFirst(personSearchResult.conf)} result
            </StyledPlaceColor>
          </ThemeProvider>
          <StyledByPhotoSearchPlaceGray>
            {personSearchResult.idxid}
          </StyledByPhotoSearchPlaceGray>
          <ThemeProvider theme={{ mode: personSearchResult.conf }}>
            <StyledRoundButtonColor
              to={`/entries/${personSearchResult.idxid}/`}
              onClick={handleClickLink}
            >
              <AngleRight size="16" />
            </StyledRoundButtonColor>
          </ThemeProvider>

          <StyledByPhotoSearchRoundButton onClick={clearResult}>
            <Times size="16" />
          </StyledByPhotoSearchRoundButton>
        </div>
      )
    ) : (
      <div>
        <StyledByPhotoSearchPlace>Search persona mode</StyledByPhotoSearchPlace>
        <TextDrag isLockDrop={hasDropped}>
          drag and drop file (.jpg, .png) or click to select
        </TextDrag>
      </div>
    );
  };

  useEffect(() => {
    if (
      hasDropped &&
      (error || personSearchResult)
    ) {
      componentDidFetch();
    }
    if (error) {
      setTimeout(() => clearResult(), ERROR_CLEAR_TIMER);
    }
  });

  return (
    <FiltersUploadPhoto
      handleUploadFile={handleUploadFile}
      render={renderContent}
      isLockDrop={hasDropped}
      isLockUpload={personSearchResult || error}
    />
  );
}

ByPhotoSearch.propTypes = {
  personSearchResult: PropTypes.object,
  clearResult: PropTypes.func.isRequired,
  componentDidFetch: PropTypes.func.isRequired,
  handleUploadFile: PropTypes.func.isRequired,
  error: PropTypes.object,
  hasDropped: PropTypes.bool,
};
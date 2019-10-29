import React from "react";
import PropTypes from "prop-types";

import { useTimeout } from "../../../hooks";
import { useEffect } from "react";

import { FiltersUploadPhoto } from "../FiltersUploadPhoto";
import StyledByPhotoSearchPlace from "./StyledByPhotoSearchPlace";
import { TextDrag } from "../../Text/TextDrag";
import StyledByPhotoSearchPlaceGray from "./StyledByPhotoSearchPlaceGray";
import StyledPlaceColor from "../StyledPlaceColor";
import StyledRoundButtonColor from "../StyledRoundButtonColor";
import StyledByPhotoSearchRoundButton from "./StyledByPhotoSearchRoundButton";
import { AngleRight, Times } from "../../../assets/icons";

import { get, upperFirst } from "lodash-es";
import { ThemeProvider } from "styled-components";

import { ERROR_CLEAR_TIMER, DEFAULT_ERROR_MESSAGE } from "./constants.js";

function ByPhotoSearch({
  personSearchResult,
  clearResult,
  onUploadEnd,
  onUpload,
  error,
  hasDropped,
}) {
  const { setUseTimeout, resetUseTimeout } = useTimeout(ERROR_CLEAR_TIMER);
  const hasResults = personSearchResult || error;

  useEffect(() => {
    if (hasDropped && hasResults) {
      onUploadEnd();
    }
    if (error) {
      setUseTimeout(clearResult);
    }
  }, [hasDropped, personSearchResult, error]);

  function handleClearResult() {
    clearResult();
    resetUseTimeout();
  }

  const errorMessage = get(
    error,
    "data.photo.detail",
    get(error, "data.detail", DEFAULT_ERROR_MESSAGE)
  );

  function renderContent() {
    return hasResults ? (
      error ? (
        <div data-testid="search-person-message">
          <StyledByPhotoSearchPlace>
            Error {error.status}
          </StyledByPhotoSearchPlace>
          <span>{errorMessage}</span>
        </div>
      ) : (
        <div data-testid="search-person-message">
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
            >
              <AngleRight size="16" />
            </StyledRoundButtonColor>
          </ThemeProvider>

          <StyledByPhotoSearchRoundButton onClick={handleClearResult}>
            <Times size="16" />
          </StyledByPhotoSearchRoundButton>
        </div>
      )
    ) : (
      <div data-testid="search-person-message">
        <StyledByPhotoSearchPlace>Search persona mode</StyledByPhotoSearchPlace>
        <TextDrag isLockDrop={hasDropped}>
          drag and drop file (.jpg, .png) or click to select
        </TextDrag>
      </div>
    );
  }

  return (
    <FiltersUploadPhoto
      onUpload={onUpload}
      render={renderContent}
      isLockDrop={hasDropped}
      isLockUpload={personSearchResult || error}
    />
  );
}

ByPhotoSearch.propTypes = {
  personSearchResult: PropTypes.object,
  clearResult: PropTypes.func.isRequired,
  onUploadEnd: PropTypes.func.isRequired,
  onUpload: PropTypes.func.isRequired,
  error: PropTypes.object,
  hasDropped: PropTypes.bool,
};

export {
  ByPhotoSearch,
  StyledByPhotoSearchPlace,
  StyledByPhotoSearchPlaceGray,
};

export default ByPhotoSearch;

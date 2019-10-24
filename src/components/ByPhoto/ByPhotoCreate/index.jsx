import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { useTimeout } from "../../../hooks";

import { ThemeProvider } from "styled-components";

import { FiltersUploadPhoto } from "../FiltersUploadPhoto";

import { TextDrag } from "../../Text/TextDrag";
import StyledPlaceRound from "../StyledPlaceRound";
import StyledByPhotoCreatePlaceLeftRound from "./StyledByPhotoCreatePlaceLeftRound";
import StyledByPhotoCreatePlaceColorRightRound from "./StyledByPhotoCreatePlaceColorRightRound";
import StyledByPhotoCreatePlaceGray from "./StyledByPhotoCreatePlaceGray";
import StyledRoundButtonColor from "../StyledRoundButtonColor";
import StyledByPhotoCreateRoundButton from "./StyledByPhotoCreateRoundButton";

import { AngleRight, Times } from "../../../assets/icons";

const ERROR_CLEAR_TIMER = 5000;

function ByPhotoCreate({
  createdPerson,
  error,
  clearResult,
  onUploadEnd,
  onUpload,
  hasDropped,
}) {
  const { setUseTimeout, resetUseTimeout } = useTimeout(ERROR_CLEAR_TIMER);

  function handleClearResult() {
    clearResult();
    resetUseTimeout();
  }

  useEffect(() => {
    const isPersonNew = createdPerson && createdPerson.conf === "new";

    if (hasDropped && (error || createdPerson)) {
      onUploadEnd();
    }

    if (isPersonNew || error) {
      setUseTimeout(clearResult);
    }
  }, [createdPerson, error, hasDropped]);

  function renderContent() {
    return createdPerson ? (
      createdPerson.conf === "new" ? (
        <div data-testid="create-person-message">
          <StyledPlaceRound>Person created</StyledPlaceRound>
          <StyledByPhotoCreatePlaceGray>
            {createdPerson.idxid}
          </StyledByPhotoCreatePlaceGray>
        </div>
      ) : (
        <div data-testid="create-person-message">
          <StyledByPhotoCreatePlaceLeftRound>
            Creation error, such person exists
          </StyledByPhotoCreatePlaceLeftRound>
          <ThemeProvider theme={{ mode: createdPerson.conf }}>
            <StyledByPhotoCreatePlaceColorRightRound>
              {createdPerson.conf}
            </StyledByPhotoCreatePlaceColorRightRound>
          </ThemeProvider>
          <StyledByPhotoCreatePlaceGray>
            {createdPerson.idxid}
          </StyledByPhotoCreatePlaceGray>
          <ThemeProvider theme={{ mode: createdPerson.conf }}>
            <StyledRoundButtonColor to={`/entries/${createdPerson.idxid}/`}>
              <AngleRight size="16" />
            </StyledRoundButtonColor>
          </ThemeProvider>
          <StyledByPhotoCreateRoundButton onClick={handleClearResult}>
            <Times size="16" />
          </StyledByPhotoCreateRoundButton>
        </div>
      )
    ) : error ? (
      <div data-testid="create-person-message">
        <StyledPlaceRound>Error {error.status}</StyledPlaceRound>
        <span>{error.data.detail || "No person found in database"}</span>
      </div>
    ) : (
      <div data-testid="create-person-message">
        <StyledPlaceRound>Create persona mode</StyledPlaceRound>
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
      isLockUpload={createdPerson || error}
    />
  );
}

ByPhotoCreate.propTypes = {
  createdPerson: PropTypes.object,
  error: PropTypes.object,
  clearResult: PropTypes.func.isRequired,
  onUploadEnd: PropTypes.func.isRequired,
  onUpload: PropTypes.func.isRequired,
  hasDropped: PropTypes.bool,
};

export { ByPhotoCreate };

export default ByPhotoCreate;

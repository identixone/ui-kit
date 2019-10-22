import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { usePrevious } from "react-use";

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
  createError,
  clearResult,
  fetchEntries,
  onCreateFinished,
  handleUploadFile,
  hasDropped,
  isPersonCreating,
}) {
  const [createResultTimeout, setCreateResultTimeout] = useState(null);

  const prevIsPersonCreating = usePrevious(isPersonCreating);

  function handleClearResult() {
    clearResult();
    setCreateResultTimeout(null);
  }

  useEffect(() => {
    const isPersonNew = createdPerson && createdPerson.conf === "new";
    const isCreateFinished = prevIsPersonCreating && !isPersonCreating;

    if (hasDropped && (createError || createdPerson)) {
      onCreateFinished();
    }

    if (isPersonNew || createError) {
      if (!createResultTimeout) {
        setCreateResultTimeout(setTimeout(clearResult, ERROR_CLEAR_TIMER));
      }

      if (isCreateFinished) {
        !createError && fetchEntries({});
      }
    }

    return () => {
      clearTimeout(createResultTimeout);
    };
  }, [createdPerson, isPersonCreating, hasDropped]);

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
    ) : createError ? (
      <div data-testid="create-person-message">
        <StyledPlaceRound>Error {createError.status}</StyledPlaceRound>
        <span>{createError.data.detail || "No person found in database"}</span>
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
      handleUploadFile={handleUploadFile}
      render={renderContent}
      isLockDrop={hasDropped}
      isLockUpload={createdPerson || createError}
    />
  );
}

ByPhotoCreate.propTypes = {
  createdPerson: PropTypes.object,
  createError: PropTypes.object,
  clearResult: PropTypes.func.isRequired,
  fetchEntries: PropTypes.func.isRequired,
  onCreateFinished: PropTypes.func.isRequired,
  handleUploadFile: PropTypes.func.isRequired,
  hasDropped: PropTypes.bool,
  isPersonCreating: PropTypes.bool,
};

export { ByPhotoCreate };

export default ByPhotoCreate;

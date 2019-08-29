import React, { Component } from "react";
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

export default class ByPhotoSearch extends Component {
  static propTypes = {
    personSearchResult: PropTypes.object,
    clearResult: PropTypes.func.isRequired,
    componentDidFetch: PropTypes.func.isRequired,
    handleUploadFile: PropTypes.func.isRequired,
    error: PropTypes.object,
    hasDropped: PropTypes.bool,
  };

  componentDidUpdate() {
    if (
      this.props.hasDropped &&
      (this.props.error || this.props.personSearchResult)
    ) {
      this.props.componentDidFetch();
    }
    if (this.props.error) {
      setTimeout(() => this.props.clearResult(), ERROR_CLEAR_TIMER);
    }
  }

  handleClickLink = e => {
    e.stopPropagation();
  };

  renderContent = () => {
    const { personSearchResult, error, hasDropped } = this.props;
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
              onClick={this.handleClickLink}
            >
              <AngleRight size="16" />
            </StyledRoundButtonColor>
          </ThemeProvider>

          <StyledByPhotoSearchRoundButton onClick={this.props.clearResult}>
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

  render() {
    const { personSearchResult, error } = this.props;
    return (
      <FiltersUploadPhoto
        handleUploadFile={this.props.handleUploadFile}
        render={this.renderContent}
        isLockDrop={this.props.hasDropped}
        isLockUpload={personSearchResult || error}
      />
    );
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";

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

export default class ByPhotoCreate extends Component {
  static propTypes = {
    createdPerson: PropTypes.object,
    error: PropTypes.object,
    clearResult: PropTypes.func.isRequired,
    componentDidFetch: PropTypes.func.isRequired,
    handleUploadFile: PropTypes.func.isRequired,
    hasDropped: PropTypes.bool,
  };

  state = {
    createResultTimeout: null,
  };

  componentDidUpdate() {
    const { createdPerson, error, hasDropped, componentDidFetch } = this.props;
    const isPersonNew = createdPerson && createdPerson.conf === "new";

    if (hasDropped && (error || createdPerson)) {
      componentDidFetch();
    }

    if (isPersonNew || error) {
      if (!this.state.createResultTimeout) {
        this.setState({
          createResultTimeout: setTimeout(this.clearResult, ERROR_CLEAR_TIMER),
        });
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.state.createResultTimeout);
  }

  clearResult = () => {
    this.props.clearResult();
    this.setState({ createResultTimeout: null });
  };

  handleClickLink = e => {
    e.stopPropagation();
  };

  renderContent = () => {
    const { createdPerson, error, hasDropped } = this.props;

    return createdPerson ? (
      createdPerson.conf === "new" ? (
        <div>
          <StyledPlaceRound>Person created</StyledPlaceRound>
          <StyledByPhotoCreatePlaceGray>
            {createdPerson.idxid}
          </StyledByPhotoCreatePlaceGray>
        </div>
      ) : (
        <div>
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
            <StyledRoundButtonColor
              to={`/entries/${createdPerson.idxid}/`}
              onClick={this.handleClickLink}
            >
              <AngleRight size="16" />
            </StyledRoundButtonColor>
          </ThemeProvider>
          <StyledByPhotoCreateRoundButton onClick={this.props.clearResult}>
            <Times size="16" />
          </StyledByPhotoCreateRoundButton>
        </div>
      )
    ) : error ? (
      <div>
        <StyledPlaceRound>Error {error.status}</StyledPlaceRound>
        <span>{error.data.detail || "No person found in database"}</span>
      </div>
    ) : (
      <div>
        <StyledPlaceRound>Create persona mode</StyledPlaceRound>
        <TextDrag isLockDrop={hasDropped}>
          drag and drop file (.jpg, .png) or click to select
        </TextDrag>
      </div>
    );
  };

  render() {
    const { createdPerson, error } = this.props;
    return (
      <FiltersUploadPhoto
        handleUploadFile={this.props.handleUploadFile}
        render={this.renderContent}
        isLockDrop={this.props.hasDropped}
        isLockUpload={createdPerson || error}
      />
    );
  }
}

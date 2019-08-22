import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { fetchEntries } from "../../../../app/entries/index";

import FiltersUploadPhoto from "../../FiltersUploadPhoto/index.jsx";

import StyledDragText from "../../../components/StyledDragText.jsx";
import StyledPlaceRound from "../StyledPlaceRound.jsx";
import StyledByPhotoCreatePlaceLeftRound from "./StyledByPhotoCreatePlaceLeftRound.jsx";
import StyledByPhotoCreatePlaceColorRightRound from "./StyledByPhotoCreatePlaceColorRightRound.jsx";
import StyledByPhotoCreatePlaceGray from "./StyledByPhotoCreatePlaceGray.jsx";
import StyledRoundButtonColor from "../StyledRoundButtonColor.jsx";
import StyledByPhotoCreateRoundButton from "./StyledByPhotoCreateRoundButton.jsx";

import { AngleRight, Times } from "../../../assets/icons";

const ERROR_CLEAR_TIMER = 5000;

import {
  getIsPersonCreating,
  getCreatedPerson,
  getCreateError,
} from "../../../../app/persons/selectors";

class ByPhotoCreate extends Component {
  static propTypes = {
    createdPerson: PropTypes.object,
    createError: PropTypes.object,
    clearResult: PropTypes.func.isRequired,
    fetchEntries: PropTypes.func.isRequired,
    componentDidFetch: PropTypes.func.isRequired,
    handleUploadFile: PropTypes.func.isRequired,
    hasDropped: PropTypes.bool,
    isCreating: PropTypes.bool,
  };

  state = {
    createResultTimeout: null,
  };

  componentDidUpdate(prevProps) {
    const {
      createdPerson,
      createError,
      isCreating,
      hasDropped,
      componentDidFetch,
    } = this.props;
    const isPersonNew = createdPerson && createdPerson.conf === "new";
    const isCreateFinished = prevProps.isCreating && !isCreating;

    if (hasDropped && (createError || createdPerson)) {
      componentDidFetch();
    }

    if (isPersonNew || createError) {
      if (!this.state.createResultTimeout) {
        this.setState({
          createResultTimeout: setTimeout(this.clearResult, ERROR_CLEAR_TIMER),
        });
      }

      if (isCreateFinished) {
        !createError && this.props.fetchEntries({});
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
    const { createdPerson, createError, hasDropped } = this.props;

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
    ) : createError ? (
      <div>
        <StyledPlaceRound>Error {createError.status}</StyledPlaceRound>
        <span>{createError.data.detail || "No person found in database"}</span>
      </div>
    ) : (
      <div>
        <StyledPlaceRound>Create persona mode</StyledPlaceRound>
        <StyledDragText isLockDrop={hasDropped}>
          drag and drop file (.jpg, .png) or click to select
        </StyledDragText>
      </div>
    );
  };

  render() {
    const { createdPerson, createError } = this.props;
    return (
      <FiltersUploadPhoto
        handleUploadFile={this.props.handleUploadFile}
        render={this.renderContent}
        isLockDrop={this.props.hasDropped}
        isLockUpload={createdPerson || createError}
      />
    );
  }
}

export default connect(
  function stateToProps(state) {
    return {
      isCreating: getIsPersonCreating(state),
      createdPerson: getCreatedPerson(state),
      createError: getCreateError(state),
    };
  },
  {
    fetchEntries,
  }
)(ByPhotoCreate);

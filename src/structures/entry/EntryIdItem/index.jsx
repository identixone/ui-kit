import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { push } from "connected-react-router";
import jump from "jump.js";
import { timeFormat, formatFaceSize } from "../../../../utils/helpers";
import StyledIdEntry from "./StyledIdEntry.jsx";
import { ColumnEntryIdType } from "./../ColumnType/index.jsx";
import StyledIdColumn from "./../columns/StyledIdColumn.jsx";
import StyledPhotoBadge from "./../StyledPhotoBadge.jsx";
import StyledPhoto from "./../StyledPhoto.jsx";
import StyledPhotoContainer from "./../StyledPhotoContainer.jsx";
import Label from "./../Label";
import StyledData from "./../StyledData.jsx";
import StyledFacesizeUp from "./../../../components/StyledFacesizeUp.jsx";
import StyledLiveness from "./StyledLiveness.jsx";
import Value from "../../../components/Value.jsx";
import AdditionalButton from "../../../components/AdditionalButton/index.jsx";
import { deletePersonEntries } from "../../../../app/entries";
import { reinitPerson } from "../../../../app/persons";
import StyledAdditionalButtonsContainer from "../../../components/StyledAdditionalButtonsContainer.jsx";
import { config } from "../config.js";

import noimage from "../../../assets/images/noimage.png";

const NO_REINIT_TYPES = ["reinit"];
const NO_DELETE_TYPES = ["new", "reinit"];

export class EntryIdItem extends Component {
  static propTypes = {
    entry: PropTypes.object,
    reinit: PropTypes.number,
    push: PropTypes.func.isRequired,
    reinitPerson: PropTypes.func.isRequired,
    deletePersonEntries: PropTypes.func.isRequired,
  };

  static defaultProps = {
    entry: {},
    reinit: 0,
  };

  isCanBeReinit(conf) {
    return !NO_REINIT_TYPES.some(type => conf === type);
  }

  isCanBeDelete(conf) {
    return !NO_DELETE_TYPES.some(type => conf === type);
  }

  render() {
    const {
      photo,
      conf,
      created,
      facesize,
      mood,
      source,
      liveness,
      idxid,
      deleted,
    } = this.props.entry;

    const isReinitButtonShow =
      !deleted &&
      this.isCanBeReinit(conf) &&
      photo &&
      this.isNotNewTypeOrHasReinitEntries(conf);
    const entryType = config.entryType[conf];

    return (
      <StyledIdEntry
        data-testid="entry-id-item"
        hidden={!idxid}
        deleted={deleted}
      >
        <StyledAdditionalButtonsContainer>
          {isReinitButtonShow ? (
            <AdditionalButton
              testId="reinit-button"
              onClick={this.handleReinit}
            >
              reinit
            </AdditionalButton>
          ) : (
            ""
          )}
          {!deleted && this.isCanBeDelete(conf) && (
            <AdditionalButton
              testId="delete-button"
              onClick={this.handleDelete}
            >
              delete
            </AdditionalButton>
          )}
        </StyledAdditionalButtonsContainer>
        <StyledLiveness liveness={liveness} />
        <StyledPhoto>
          <StyledPhotoContainer>
            <StyledPhotoBadge>
              <StyledFacesizeUp title="face area in pixels">
                {formatFaceSize(facesize)}
              </StyledFacesizeUp>
            </StyledPhotoBadge>
            <img width={100} height={100} src={photo || noimage} />
          </StyledPhotoContainer>
        </StyledPhoto>
        <ThemeProvider theme={{ mode: conf }}>
          <ColumnEntryIdType type={conf} />
        </ThemeProvider>
        <StyledIdColumn width={160}>
          <Label>Confidence</Label>
          <StyledData>
            <Value>{entryType && entryType.full}</Value>
          </StyledData>
          <Label>Detected</Label>
          <StyledData>{timeFormat(created)}</StyledData>
        </StyledIdColumn>
        <StyledIdColumn>
          <Label>Mood</Label>
          <StyledData>
            <Value>{mood}</Value>
          </StyledData>
          <Label>Place of detection</Label>
          <StyledData>{source && source.name}</StyledData>
        </StyledIdColumn>
      </StyledIdEntry>
    );
  }

  isNotNewTypeOrHasReinitEntries(conf) {
    const { reinit } = this.props;
    return conf === "new" ? reinit : true;
  }

  handleDelete = e => {
    const { id } = this.props.entry;
    this.props.deletePersonEntries(id);
    e.stopPropagation();
  };

  handleReinit = e => {
    const { id, facesize, idxid } = this.props.entry;
    this.props.reinitPerson({ recordId: id, facesize, idxid });
    jump("#app-container", { duration: 0 });
    e.stopPropagation();
  };

  handleClick = () => {
    const { idxid } = this.props.entry;
    this.props.push(`/entries/${idxid}/`);
  };
}

export default connect(
  null,
  {
    push,
    deletePersonEntries,
    reinitPerson: reinitPerson,
  }
)(EntryIdItem);

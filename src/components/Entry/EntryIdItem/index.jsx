import React, { Component } from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "styled-components";

import jump from "jump.js";
import StyledIdEntry from "./StyledIdEntry";
import { ColumnEntryIdType } from "../ColumnType/index";
import StyledIdColumn from "../columns/StyledIdColumn";
import StyledPhotoBadge from "../StyledPhotoBadge";
import StyledPhoto from "../StyledPhoto";
import StyledPhotoContainer from "../StyledPhotoContainer";
import Label from "../Label";
import StyledData from "../StyledData";
import StyledFacesize from "./StyledFacesize";
import StyledLiveness from "./StyledLiveness";
import { Value } from "../../Value";

import { config } from "../config.js";
import { timeFormat, formatFaceSize } from "../../../utils/helpers";

import EntryAdditionalButtons from "../EntryAdditionalButtons";
import EntryAdditionalButton from "../EntryAdditionalButtons/EntryAdditionalButton";

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
        <EntryAdditionalButtons>
          {isReinitButtonShow ? (
            <EntryAdditionalButton
              testId="reinit-button"
              onClick={this.handleReinit}
            >
              reinit
            </EntryAdditionalButton>
          ) : (
            ""
          )}
          {!deleted && this.isCanBeDelete(conf) && (
            <EntryAdditionalButton
              testId="delete-button"
              onClick={this.handleDelete}
            >
              delete
            </EntryAdditionalButton>
          )}
        </EntryAdditionalButtons>
        <StyledLiveness liveness={liveness} />
        <StyledPhoto>
          <StyledPhotoContainer>
            <StyledPhotoBadge>
              <StyledFacesize title="face area in pixels">
                {formatFaceSize(facesize)}
              </StyledFacesize>
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

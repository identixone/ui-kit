import React, { Component } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import { timeFormat, formatFaceSize } from "../../../utils/helpers";
import { config } from "../config";

import StyledRow from "../StyledRow";
import StyledColumn from "../columns/StyledColumn";
import StyledEntriesColumn from "../columns/StyledEntriesColumn";

import Liveness from "../Liveness";
import { ColumnEntryType } from "../ColumnType";

import { Value } from "../../Value";
import { PhotoBased } from "../../PhotoBased";
import { IdCopy } from "../../IdCopy";
import { IdFormat } from "../../IdFormat";

import { EntryCardContainer } from "../EntryCardContainer";

export class EntryItem extends Component {
  static propTypes = {
    entry: PropTypes.object,
    live: PropTypes.bool,
    active: PropTypes.bool,
    onClick: PropTypes.func,
    onLoad: PropTypes.func,
    push: PropTypes.func,
    updateCurrentEntryIdxid: PropTypes.func,
    deletePersonEntries: PropTypes.func,
    highlight: PropTypes.bool,
    blurredEntries: PropTypes.bool,
    pointer: PropTypes.bool,
    copyId: PropTypes.bool,
    additionalButtons: PropTypes.bool,
  };

  static defaultProps = {
    active: false,
    live: false,
    entry: {},
    pointer: true,
    copyId: true,
    onLoad: () => {},
    additionalButtons: false,
  };

  handleLoadImage = () => {
    if (this.props.onLoad) {
      this.props.onLoad();
    }
  };

  render() {
    const {
      initial_photo,
      photo,
      conf,
      age,
      created,
      idxid_created,
      facesize,
      idxid,
      mood,
      sex,
      liveness,
      source,
    } = this.props.entry;

    const { blurredEntries, copyId } = this.props;

    const isDetectedShow =
      conf === "exact" ||
      conf === "junk" ||
      conf === "nm" ||
      conf === "det" ||
      conf === "ha";

    const isInitialShow = !(conf === "nm") && !(conf === "det");

    const type = config.entryType[conf].full;
    const sexStr = config.sex[sex];

    return (
      <EntryCardContainer isInitialShow={isInitialShow} {...this.props}>
        <Liveness liveness={liveness} />

        <div>
          <PhotoBased
            blurredEntries={blurredEntries}
            junksi={config.set.normal.view.junksi}
            facesize={!isDetectedShow ? formatFaceSize(facesize) : ""}
            photo={initial_photo}
            conf={conf}
            title={"Initial"}
            isVisible={isInitialShow}
            onLoad={this.handleLoadImage}
          />
          <PhotoBased
            type={"detected"}
            title={"Detected"}
            facesize={formatFaceSize(facesize)}
            photo={photo}
            isVisible={isDetectedShow}
            onLoad={this.handleLoadImage}
          />
        </div>

        <ThemeProvider theme={{ mode: conf }}>
          <ColumnEntryType type={conf} title="type" />
        </ThemeProvider>

        <StyledEntriesColumn width={280}>
          <StyledRow>
            ID
            <span>
              {copyId ? <IdCopy id={idxid} /> : <IdFormat id={idxid} />}
            </span>
          </StyledRow>
          <StyledRow>
            Confidence
            <span>
              <Value>{type}</Value>
            </span>
          </StyledRow>
          <StyledRow>
            Detected
            <span>
              <Value>{timeFormat(created)}</Value>
            </span>
          </StyledRow>
          <StyledRow>
            Card created
            <span>
              <Value>{timeFormat(idxid_created)}</Value>
            </span>
          </StyledRow>
        </StyledEntriesColumn>

        <StyledColumn>
          <StyledRow>
            Age
            <span>
              <Value>{age}</Value>
            </span>
          </StyledRow>
          <StyledRow>
            Sex
            <span>
              <Value>{sexStr}</Value>
            </span>
          </StyledRow>
          <StyledRow>
            Mood
            <span>
              <Value>{mood}</Value>
            </span>
          </StyledRow>
          <StyledRow>
            Source
            <span>
              <Value>{source.name}</Value>
            </span>
          </StyledRow>
        </StyledColumn>
      </EntryCardContainer>
    );
  }
}

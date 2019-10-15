import React, { Component } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import { timeFormat, formatFaceSize } from "../../../utils/helpers";
import { config } from "../config";

import StyledRow from "../StyledRow";
import StyledEntriesColumn from "../columns/StyledEntriesColumn";

import Liveness from "../Liveness";
import { ColumnEntryType } from "../ColumnType";

import { Value } from "../../Value";
import { PhotoBased } from "../../PhotoBased";

import { EntryItemWrapper } from "../EntryItemWrapper";

export class EntryShortItem extends Component {
  static propTypes = {
    entry: PropTypes.object,
    active: PropTypes.bool,
    onLoad: PropTypes.func,
    deletePersonEntries: PropTypes.func,
    highlight: PropTypes.bool,
    blurredEntries: PropTypes.bool,
    additionalButtons: PropTypes.bool,
  };
  static defaultProps = {
    active: false,
    entry: {},
    onLoad: () => {},
    additionalButtons: false,
  };

  render() {
    const {
      initial_photo,
      photo,
      conf,
      facesize,
      liveness,
      source,
      direction,
      first_name = "",
      middle_name = "",
      second_name = "",
      detected,
    } = this.props.entry;

    const { blurredEntries } = this.props;

    const isDetectedShow = !!photo;
    const isInitialShow = !!initial_photo;

    const getDirection = () => {
      switch (direction) {
        case null:
          return "All";
        case 0:
          return "Enter";
        case 1:
          return "Exit";
        default:
          return "";
      }
    };

    return (
      <EntryItemWrapper isInitialShow={isInitialShow} {...this.props}>
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
          <ColumnEntryType type={conf} />
        </ThemeProvider>
        <StyledEntriesColumn width={280}>
          <StyledRow>
            Full name
            <span>
              <Value>{`${first_name} ${middle_name} ${second_name}`}</Value>
            </span>
          </StyledRow>

          <StyledRow>
            Detected
            <span>
              <Value>{timeFormat(detected)}</Value>
            </span>
          </StyledRow>
          <StyledRow>
            Source
            <span>
              <Value>{source.name}</Value>
            </span>
          </StyledRow>
          <StyledRow>
            Direction
            <span>
              <Value>{getDirection()}</Value>
            </span>
          </StyledRow>
        </StyledEntriesColumn>
      </EntryItemWrapper>
    );
  }

  handleLoadImage = () => {
    this.props && this.props.onLoad && this.props.onLoad();
  };
}

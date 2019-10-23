import React, { Component } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import { timeFormat } from "../../../utils/helpers";
import { config } from "../config";

import StyledRow from "../StyledRow";
import StyledColumn from "../columns/StyledColumn";
import StyledEntriesColumn from "../columns/StyledEntriesColumn";

import { ColumnEntryType } from "../ColumnType";

import { Value } from "../../Value";
import { PhotoBased } from "../../PhotoBased";

import { EntryCardContainer } from "../EntryCardContainer";

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
      detected_photo,
      accepted,
      source,
      device,
      direction,
      person = "",
      created,
    } = this.props.entry;

    const { blurredEntries } = this.props;

    const isDetectedShow = !!detected_photo;
    const isInitialShow = !!initial_photo;

    const getDirection = () => {
      switch (direction) {
        case 0:
          return "Enter";
        case 1:
          return "Exit";
        default:
          return "All";
      }
    };

    const mode = accepted ? "accepted" : "declined";

    return (
      <EntryCardContainer isInitialShow={isInitialShow} {...this.props}>
        <div>
          <PhotoBased
            blurredEntries={blurredEntries}
            junksi={config.set.normal.view.junksi}
            photo={initial_photo}
            conf={mode}
            title={"Initial"}
            isVisible={isInitialShow}
            onLoad={this.handleLoadImage}
          />
          <PhotoBased
            type={"detected"}
            title={"Detected"}
            photo={detected_photo}
            isVisible={isDetectedShow}
            onLoad={this.handleLoadImage}
          />
        </div>
        <ThemeProvider theme={{ mode: mode }}>
          <ColumnEntryType type={mode} />
        </ThemeProvider>
        <StyledEntriesColumn width={280}>
          <StyledRow>
            Full name
            <span>
              <Value>{person}</Value>
            </span>
          </StyledRow>
        </StyledEntriesColumn>
        <StyledColumn>
          <StyledRow>
            Detected
            <span>
              <Value>{timeFormat(created)}</Value>
            </span>
          </StyledRow>
          <StyledRow>
            Device
            <span>
              <Value>{device}</Value>
            </span>
          </StyledRow>
          <StyledRow>
            Source
            <span>
              <Value>{source}</Value>
            </span>
          </StyledRow>
          <StyledRow>
            Direction
            <span>
              <Value>{getDirection()}</Value>
            </span>
          </StyledRow>
        </StyledColumn>
      </EntryCardContainer>
    );
  }

  handleLoadImage = () => {
    this.props && this.props.onLoad && this.props.onLoad();
  };
}

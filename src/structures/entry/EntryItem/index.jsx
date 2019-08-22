import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { ThemeProvider } from "styled-components";
import { deletePersonEntries } from "../../../../app/entries";

import { timeFormat, formatFaceSize } from "../../../../utils/helpers";
import { config } from "./../config";
import IdCopy from "../../../components/IdCopy";
import IdFormat from "../../../components/IdFormat";
import StyledRow from "./../StyledRow.jsx";
import StyledColumn from "./../columns/StyledColumn.jsx";
import StyledEntriesColumn from "./../columns/StyledEntriesColumn.jsx";
import { ColumnEntryType } from "./../ColumnType/index.jsx";
import AdditionalButton from "../../../components/AdditionalButton/index.jsx";

import StyledEntry from "./../StyledEntry.jsx";
import StyledRecCard from "./../StyledRecCard.jsx";
import PhotoBased from "../../../components/PhotoBased";
import Liveness from "../Liveness/index.jsx";
import Value from "../../../components/Value.jsx";
import StyledAdditionalButtonsContainer from "../../../components/StyledAdditionalButtonsContainer.jsx";

const COLOR_CHANGE_RATE = 60; // seconds

const NO_DELETE_TYPES = ["reinit", "new"];

class EntryItem extends Component {
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

  entryref = React.createRef();

  constructor(props) {
    super(props);

    this.state = {
      actualColorMode: "default",
      colorMode: props.active ? "active" : "default",
      deleted: false,
    };

    this.timer = null;
  }

  static getDerivedStateFromProps(props, state) {
    const { active } = props;
    return {
      colorMode: active ? "active" : state.actualColorMode,
    };
  }

  componentDidMount() {
    if (this.props.highlight) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.setState({
        colorMode: "new",
        actualColorMode: "new",
      });

      this.timer = setTimeout(() => {
        this.setState({
          colorMode: "default",
          actualColorMode: "default",
        });
      }, COLOR_CHANGE_RATE * 1000);
    }
  }

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
      deleted,
    } = this.props.entry;

    const { blurredEntries, pointer, copyId, additionalButtons } = this.props;

    const { colorMode } = this.state;
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
      <StyledEntry
        data-testid="entry-item"
        data-idxid={idxid}
        ref={this.entryref}
        pointer={pointer && !deleted && isInitialShow}
        mode={"entries"}
        deleted={deleted}
        onClick={this.handleClick}
      >
        <ThemeProvider theme={{ mode: colorMode }}>
          <StyledRecCard>
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
            {additionalButtons && (
              <StyledAdditionalButtonsContainer>
                {!deleted && this.isCanBeDeleted(conf) && (
                  <AdditionalButton onClick={this.handleDelete}>
                    delete
                  </AdditionalButton>
                )}
              </StyledAdditionalButtonsContainer>
            )}
          </StyledRecCard>
        </ThemeProvider>
      </StyledEntry>
    );
  }

  isCanBeDeleted(conf) {
    return !NO_DELETE_TYPES.some(type => conf === type);
  }

  handleDelete = e => {
    const { id } = this.props.entry;
    this.props.deletePersonEntries(id);
    e.stopPropagation();
  };

  handleLoadImage = () => {
    this.props && this.props.onLoad && this.props.onLoad();
  };

  handleClick = () => {
    if (!this.state.deleted) {
      if (this.props.live) {
        this.props.onClick(this.props.entry.id);
      } else {
        const { idxid } = this.props.entry;
        this.props.updateCurrentEntryIdxid(idxid);
        idxid && this.props.push(`/entries/${idxid}/`);
      }
    }
  };
}

export default connect(
  null,
  {
    push,
    deletePersonEntries,
  }
)(EntryItem);

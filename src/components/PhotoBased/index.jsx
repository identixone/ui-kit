import React, { Component } from "react";
import PropTypes from "prop-types";

import StyledPhotoContainter from "./StyledPhotoContainter";
import StyledPhotoBased from "./StyledPhotoBased";
import StyledPhotoTitle from "./StyledPhotoTitle";
import StyledVerticalTitle from "./StyledVerticalTitle";
import StyledFacesize from "./StyledFacesize";

import noimage from "../../assets/images/noimage.png";

export class PhotoBased extends Component {
  static propTypes = {
    facesize: PropTypes.string,
    conf: PropTypes.string,
    junksi: PropTypes.bool,
    title: PropTypes.string,
    blurredEntries: PropTypes.bool,
    photo: PropTypes.string,
    type: PropTypes.string,
    isVisible: PropTypes.bool,
  };

  state = {
    loaded: false,
  };

  handleImageLoaded = () => {
    this.setState(({ loaded }) => (!loaded ? { loaded: true } : null));
  };

  render() {
    const {
      facesize,
      conf,
      photo,
      junksi,
      title,
      type,
      blurredEntries,
    } = this.props;
    const isVisible = this.props.isVisible;
    const isHaveNoPhoto = !photo && this.props.isVisible;
    const { loaded } = this.state;

    return (
      <StyledPhotoBased
        type={type}
        blur={blurredEntries && conf === "junk" && junksi == false}
      >
        {isVisible && (
          <StyledFacesize title="face area in pixels">
            {facesize}
          </StyledFacesize>
        )}
        {isVisible && (
          <StyledPhotoTitle type={this.props.type}>
            <StyledVerticalTitle>{title}</StyledVerticalTitle>
          </StyledPhotoTitle>
        )}
        <StyledPhotoContainter
          loadBackground={isVisible}
          noBackground={isHaveNoPhoto}
        >
          {isVisible && (
            <React.Fragment>
              <img
                style={{ display: loaded ? "block" : "none" }}
                src={isHaveNoPhoto ? noimage : photo}
                onLoad={this.handleImageLoaded}
              />
            </React.Fragment>
          )}
        </StyledPhotoContainter>
      </StyledPhotoBased>
    );
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";

import StyledLazyImage from "./StyledLazyImage";
import LazyImageContainer from "./LazyImageContainer";

import { noop } from "lodash-es";

class LazyImage extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    onLoad: PropTypes.func,
  };

  static defaultProps = {
    onLoad: noop,
  };

  state = {
    isLoaded: false,
  };

  componentDidUpdate(_, prevState) {
    if (!prevState.isLoaded && this.state.isLoaded) {
      this.props.onLoad();
    }
  }

  handleImageLoad = () => {
    this.setState(({ isLoaded }) => (!isLoaded ? { isLoaded: true } : null));
  };

  render() {
    const { className, src } = this.props;
    const { isLoaded } = this.state;

    return (
      <LazyImageContainer className={className} isImageLoaded={isLoaded}>
        <StyledLazyImage src={src} onLoad={this.handleImageLoad} />
      </LazyImageContainer>
    );
  }
}

export { LazyImage };

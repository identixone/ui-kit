import React from "react";
import PropTypes from "prop-types";

import { throttle } from "lodash-es";

export default class InfiniteScroll extends React.Component {
  static propTypes = {
    onScrollToPoint: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    scrollerRef: PropTypes.object,
  };

  state = {
    lastScrollMenuTop: 0,
  };

  scrollerRef = this.props.scrollerRef || React.createRef();

  handleScroll = ({ target }) => {
    const { scrollTop, scrollHeight } = target;
    const { height } = target.getBoundingClientRect();
    const isScrollDown = this.state.lastScrollMenuTop < scrollTop;

    this.setState(
      {
        lastScrollMenuTop: scrollTop,
      },
      () => {
        if (
          isScrollDown &&
          scrollTop + height >= scrollHeight * 0.9 &&
          !this.props.isFetching
        ) {
          this.props.onScrollToPoint();
        }
      }
    );
  };

  throttledMenuScrollHandler = throttle(this.handleScroll, 500, {
    leading: false,
  });

  componentDidMount = () => {
    if (!this.scrollerRef.current) {
      console.warn("You dont specify scrollerRef node");
      return;
    }

    this.scrollerRef.current.addEventListener(
      "scroll",
      this.throttledMenuScrollHandler
    );
  };

  render() {
    const { children } = this.props;

    if (typeof children === "function") {
      return children({
        scrollerRef: this.scrollerRef,
      });
    } else {
      return children;
    }
  }
}

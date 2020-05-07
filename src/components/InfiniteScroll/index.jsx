import React from "react";
import PropTypes from "prop-types";

import { throttle } from "lodash-es";

export class InfiniteScroll extends React.Component {
  static propTypes = {
    onScrollToPoint: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    scrollerRef: PropTypes.object,
    fetchOnOffset: PropTypes.number,
  };

  state = {
    lastScrollMenuTop: 0,
  };

  scrollerRef = this.props.scrollerRef || React.createRef();

  handleScroll = ({ target }) => {
    if (target === window.document) {
      const { pageYOffset, innerHeight } = window;
      const { scrollHeight } = window.document.body;
      const fetchOffset = this.props.fetchOnOffset || scrollHeight * 0.9;
      const isScrollDown = this.state.lastScrollMenuTop < pageYOffset;

      this.setState(
        {
          lastScrollMenuTop: pageYOffset,
        },
        () => {
          if (
            isScrollDown &&
            pageYOffset + innerHeight >= fetchOffset &&
            !this.props.isFetching
          ) {
            this.props.onScrollToPoint();
          }
        }
      );
    } else {
      const { scrollTop, scrollHeight } = target;
      const fetchOffset = this.props.fetchOnOffset || scrollHeight * 0.9;
      const { height } = target.getBoundingClientRect();
      const isScrollDown = this.state.lastScrollMenuTop < scrollTop;

      this.setState(
        {
          lastScrollMenuTop: scrollTop,
        },
        () => {
          if (
            isScrollDown &&
            scrollTop + height >= fetchOffset &&
            !this.props.isFetching
          ) {
            this.props.onScrollToPoint();
          }
        }
      );
    }
  };

  throttledMenuScrollHandler = throttle(this.handleScroll, 500, {
    leading: false,
  });

  componentDidMount() {
    if (!this.scrollerRef.current) {
      console.warn("You dont specify scrollerRef node");
      return;
    }

    this.scrollerRef.current.addEventListener(
      "scroll",
      this.throttledMenuScrollHandler
    );
  }

  componentWillUnmount() {
    if (this.scrollerRef.current) {
      this.scrollerRef.current.removeEventListener(
        "scroll",
        this.throttledMenuScrollHandler
      );
    }
  }

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

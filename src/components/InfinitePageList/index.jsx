import React from "react";
import PropTypes from "prop-types";

import { useRef, useState, useEffect } from "react";

import { InfiniteScroll } from "../InfiniteScroll";

function InfinitePageList({
  children,
  hasNext,
  lockScroll,
  changeOffset,
  offset,
  limit,
  isFetching,
}) {
  const [isListEnds, setIsListEnds] = useState(!hasNext);
  useEffect(() => {
    setIsListEnds(!hasNext);
  }, [hasNext]);

  const pageRef = useRef(window);

  function fetchNext() {
    if (!isListEnds && !lockScroll) {
      changeOffset(offset + limit);
    }
  }

  return (
    <InfiniteScroll
      onScrollToPoint={fetchNext}
      scrollerRef={pageRef}
      isFetching={isFetching}
    >
      {children}
    </InfiniteScroll>
  );
}

InfinitePageList.propTypes = {
  children: PropTypes.oneOfType(PropTypes.node, PropTypes.array).isRequired,
  hasNext: PropTypes.bool.isRequired,
  lockScroll: PropTypes.bool.isRequired,
  changeOffset: PropTypes.func.isRequired,
  offset: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export { InfinitePageList };

import React from "react";
import PropTypes from "prop-types";
import StyledShownControl from "./StyledShownControl.jsx";
import StyledShownControlArrowRightContainer from "./StyledShownControlArrowRightContainer.jsx";

import StyledShownControlButtonArrow from "./StyledShownControlButtonArrow.jsx";
import { KeyboardArrowRight, KeyboardArrowLeft } from "../icons/index.js";

import StyledShownControlInfoContainer from "./StyledShownControlInfoContainer.jsx";
import StyledShownControlInfoContainerInner from "./StyledShownControlInfoContainerInner.jsx";
import { usePagination } from "../../hooks";

// Deprecated
export function ShownControl(props) {
  const {
    paginationState,
    handlePaginationNext,
    handlePaginationPrev,
  } = usePagination(props);

  const {
    offset,
    count,

    limit,
    totalCount,
    children,
    className,
  } = props;
  const {
    isPrevPaginationButtonActive,
    isNextPaginationButtonActive,
    selectedPageNum,
  } = paginationState;

  const showTo = Number(offset) + Number(count);
  const isPrevButtonEnabled =
    isPrevPaginationButtonActive && selectedPageNum > 1;
  const isNextButtonEnabled =
    isNextPaginationButtonActive && totalCount > limit;

  return (
    Boolean(count) && (
      <StyledShownControl className={className}>
        <StyledShownControlButtonArrow
          width="36"
          isDisabled={!isPrevButtonEnabled}
          onClick={handlePaginationPrev}
          theme={isPrevButtonEnabled ? "dark" : "light"}
          data-testid="shownControl-button-prev"
        >
          <KeyboardArrowLeft width="27" height="23" />
        </StyledShownControlButtonArrow>
        <StyledShownControlInfoContainer>
          <StyledShownControlInfoContainerInner>
            {typeof children === "function"
              ? children({
                  from: offset + 1 || 1,
                  to: showTo,
                })
              : children}
          </StyledShownControlInfoContainerInner>
        </StyledShownControlInfoContainer>
        <StyledShownControlButtonArrow
          width="36"
          isDisabled={!isNextButtonEnabled}
          theme={isNextButtonEnabled ? "dark" : "light"}
          onClick={handlePaginationNext}
          data-testid="shownControl-button-next"
        >
          <StyledShownControlArrowRightContainer>
            <KeyboardArrowRight width="27" height="23" />
          </StyledShownControlArrowRightContainer>
        </StyledShownControlButtonArrow>
      </StyledShownControl>
    )
  );
}

ShownControl.propTypes = {
  offset: PropTypes.number,
  limit: PropTypes.number,
  totalCount: PropTypes.number,
  count: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  className: PropTypes.string,
};

ShownControl.defaultProps = {
  offset: 0,
  count: null,
};

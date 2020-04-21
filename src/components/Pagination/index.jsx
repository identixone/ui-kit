import React from "react";
import PropTypes from "prop-types";

import { useState, useEffect } from "react";
import { usePagination } from "../../hooks";

import { StyledPagination } from "./StyledPagination";
import { PaginationPages } from "./PaginationPages";
import { PaginationPageButton } from "./PaginationPageButton";
import { PaginationControlButton } from "./PaginationControlButton";
import { PaginationDots } from "./PaginationDots";
import { BoxRightArrow, BoxLeftArrow } from "../icons";

const DOTS = "...";
const END_LIMIT_PADDINGNUM = 3;

// Deprecated
function Pagination({
  visibleRange,
  nearStartBorderNum,
  offset,
  limit,
  simplePaginationLimit,
  totalCount,
  className,
  onChange,
  "data-testid": testId,
}) {
  const {
    paginationState,
    handlePaginationNext,
    handlePaginationPrev,
    handleChangePagination,
  } = usePagination({
    offset,
    limit,
    onChange,
    totalCount,
  });

  const [paginationList, setPaginationList] = useState([]);

  function updatePaginationList() {
    const fullPaginationNumbersLength = Math.ceil(totalCount / limit || 0);

    if (fullPaginationNumbersLength > simplePaginationLimit) {
      setPaginationList(getCutPagination(fullPaginationNumbersLength));
    } else {
      const pgnList = [];
      for (let i = 0; i < fullPaginationNumbersLength; i++) {
        pgnList.push(i + 1);
      }
      setPaginationList(pgnList);
    }
  }

  function getDots(index) {
    return <PaginationDots key={index}>{DOTS}</PaginationDots>;
  }

  function handleSelectPagin(event) {
    const { index } = event.currentTarget.dataset;
    handleChangePagination(Number(index));
  }

  function getCutPagination(fullPaginationLength) {
    const { selectedPageNum } = paginationState;
    const paginationList = [selectedPageNum];

    fillVisibleRange(paginationList, fullPaginationLength);
    fillEndDots(paginationList, fullPaginationLength);
    fillStartDots(paginationList);

    if (selectedPageNum === nearStartBorderNum) {
      paginationList.unshift(1);
    }

    return paginationList;
  }

  function fillVisibleRange(paginationList, fullPaginationLength) {
    const { selectedPageNum } = paginationState;

    for (let i = 1; i < visibleRange; i++) {
      if (selectedPageNum + i <= fullPaginationLength) {
        paginationList.push(selectedPageNum + i);
      }

      if (selectedPageNum > i) {
        paginationList.unshift(selectedPageNum - i);
      }
    }
  }

  function fillEndDots(paginationList, fullPaginationLength) {
    const { selectedPageNum } = paginationState;
    const limitPadding = END_LIMIT_PADDINGNUM;

    if (selectedPageNum + limitPadding < fullPaginationLength) {
      paginationList.push(DOTS);
      paginationList.push(fullPaginationLength);
    }
  }

  function fillStartDots(paginationList) {
    const { selectedPageNum } = paginationState;

    if (selectedPageNum > nearStartBorderNum) {
      paginationList.unshift(DOTS);
      paginationList.unshift(1);
    }
  }

  useEffect(updatePaginationList, [limit, totalCount, offset]);

  const {
    isPrevPaginationButtonActive,
    isNextPaginationButtonActive,
  } = paginationState;
  const selectedPaginationNumber = paginationState.selectedPageNum;
  const isPaginationShow = paginationList.length > 1;

  return (
    isPaginationShow && (
      <StyledPagination data-testid={testId} className={className}>
        <PaginationControlButton
          data-testid="pagination-button-prev"
          onClick={handlePaginationPrev}
          isHidden={!isPrevPaginationButtonActive}
        >
          <BoxLeftArrow size="12" />
        </PaginationControlButton>

        <PaginationPages>
          {paginationList.map((item, index) => {
            const isDots = item === DOTS;
            return isDots ? (
              getDots(index)
            ) : (
              <PaginationPageButton
                key={`${item} + "_paginationList"`}
                onClick={handleSelectPagin}
                data-index={item}
                active={item == selectedPaginationNumber}
                data-testid={`pagination-num-${item}`}
              >
                {item}
              </PaginationPageButton>
            );
          })}
        </PaginationPages>

        <PaginationControlButton
          data-testid="pagination-button-next"
          onClick={handlePaginationNext}
          isHidden={!isNextPaginationButtonActive}
        >
          <BoxRightArrow size="11" />
        </PaginationControlButton>
      </StyledPagination>
    )
  );
}

Pagination.propTypes = {
  totalCount: PropTypes.number,
  limit: PropTypes.number,
  offset: PropTypes.number,
  simplePaginationLimit: PropTypes.number,
  visibleRange: PropTypes.number.isRequired,
  nearStartBorderNum: PropTypes.number.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  "data-testid": PropTypes.string,
};

Pagination.defaultProps = {
  visibleRange: 2,
  nearStartBorderNum: 3,
  offset: 0,
  limit: 20,
  simplePaginationLimit: 6,
  "data-testid": "pagination",
};

export { Pagination, StyledPagination };

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import StyledPageNum from "./StyledPageNum.jsx";
import StyledPaginationPages from "./StyledPaginationPages.jsx";
import { PaginationControlButton } from "./PaginationControlButton";
import ThreePoint from "./ThreePoint.jsx";
import StyledPagination from "./StyledPagination.jsx";

import { BoxRightArrow, BoxLeftArrow } from "../../assets/icons";

const THREE_POINT = "...";
const END_LIMIT_PADDINGNUM = 3;

import { usePagination } from "../../hooks";

export function Pagination(props) {
  const {
    visibleRange,
    nearStartBorderNum,
    offset,
    limit,
    simplePaginationLimit,
    totalCount,
    isVisible,
    className,
  } = props;
  const {
    paginationState,
    handlePaginationNext,
    handlePaginationPrev,
    handleChangePagination,
  } = usePagination(props);

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

  function getThreePoint(index) {
    return <ThreePoint key={index}>{THREE_POINT}</ThreePoint>;
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
      paginationList.push(THREE_POINT);
      paginationList.push(fullPaginationLength);
    }
  }

  function fillStartDots(paginationList) {
    const { selectedPageNum } = paginationState;

    if (selectedPageNum > nearStartBorderNum) {
      paginationList.unshift(THREE_POINT);
      paginationList.unshift(1);
    }
  }

  useEffect(() => {
    updatePaginationList();
  }, [limit, totalCount, offset]);
  const {
    isPrevPaginationButtonActive,
    isNextPaginationButtonActive,
  } = paginationState;
  const selectedPaginationNumber = paginationState.selectedPageNum;
  const isPaginationShow = paginationList.length > 1 && isVisible;

  return (
    isPaginationShow && (
      <StyledPagination data-testid="pagination" className={className}>
        <PaginationControlButton
          data-testid="pagination-button-prev"
          onClick={handlePaginationPrev}
          hidden={!isPrevPaginationButtonActive}
        >
          <BoxLeftArrow size="12" />
        </PaginationControlButton>

        <StyledPaginationPages>
          {paginationList.map((item, index) => {
            const isThreePoint = item === THREE_POINT;
            return isThreePoint ? (
              getThreePoint(index)
            ) : (
              <StyledPageNum
                key={`${item} + "_paginationList"`}
                onClick={handleSelectPagin}
                data-index={item}
                active={item == selectedPaginationNumber}
                data-testid={`pagination-num-${item}`}
              >
                {item}
              </StyledPageNum>
            );
          })}
        </StyledPaginationPages>

        <PaginationControlButton
          data-testid="pagination-button-next"
          onClick={handlePaginationNext}
          hidden={!isNextPaginationButtonActive}
        >
          <BoxRightArrow size="11" />
        </PaginationControlButton>
      </StyledPagination>
    )
  );
}

Pagination.propTypes = {
  isVisible: PropTypes.bool,
  totalCount: PropTypes.number,
  limit: PropTypes.number,
  offset: PropTypes.number,
  simplePaginationLimit: PropTypes.number,
  visibleRange: PropTypes.number.isRequired,
  nearStartBorderNum: PropTypes.number.isRequired,
  isPrevPaginationButtonActive: PropTypes.bool,
  isNextPaginationButtonActive: PropTypes.bool,
  selectedPageNum: PropTypes.number,
  className: PropTypes.string,
};

Pagination.defaultProps = {
  visibleRange: 2,
  nearStartBorderNum: 3,
  offset: 0,
  limit: 20,
  simplePaginationLimit: 6,
};

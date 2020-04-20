import { useState } from "react";
import { useUpdateEffect } from "react-use";

const calculateSelectedPage = (offset, limit) => {
  return offset / limit + 1 || 1;
};

export const usePagination = (props) => {
  const { limit, offset, totalCount } = props;

  const fullPaginationNumbersLength = Math.ceil(totalCount / limit || 0);
  const selectedPageNum = calculateSelectedPage(offset, limit);
  const [state, setState] = useState({
    selectedPageNum: selectedPageNum,
    isPrevPaginationButtonActive: selectedPageNum > 1,
    isNextPaginationButtonActive:
      selectedPageNum !== fullPaginationNumbersLength,
  });

  function handleChange() {
    const { limit, offset } = props;
    setState({
      ...state,
      selectedPageNum: calculateSelectedPage(offset, limit),
    });
  }

  function handleChangePagination(value) {
    const { totalCount, limit, onChange } = props;
    const fullPaginationNumbersLength = Math.ceil(totalCount / limit || 0);

    setState({
      selectedPageNum: value,
      isNextPaginationButtonActive: value !== fullPaginationNumbersLength,
      isPrevPaginationButtonActive: value > 1,
    });
    const newOffset = limit * (value - 1);
    if (newOffset !== offset) {
      if (onChange) {
        onChange({ offset: newOffset });
      }
    }
  }

  function handlePaginationNext() {
    const { selectedPageNum } = state;
    const value = selectedPageNum + 1;

    handleChangePagination(value);
  }

  function handlePaginationPrev() {
    const { selectedPageNum } = state;
    if (selectedPageNum > 1) {
      handleChangePagination(selectedPageNum - 1);
    }
  }

  useUpdateEffect(() => {
    const { limit, offset } = props;
    handleChangePagination(calculateSelectedPage(offset, limit));
  }, [limit, offset, totalCount]);

  return {
    paginationState: state,
    handleChange,
    handleChangePagination,
    handlePaginationNext,
    handlePaginationPrev,
  };
};

import React from "react";
import { fireEvent } from "@testing-library/react";

import { render } from "../../../../test/utils";
import { Pagination } from "../index.jsx";

describe("Pagination tests", () => {
  const handleChangePaginationMock = jest.fn();
  afterEach(() => {
    handleChangePaginationMock.mockClear();
  });

  afterAll(() => {
    handleChangePaginationMock.mockReset();
  });

  const defaultProps = {
    isVisible: true,
    visibleRange: 4,
    nearStartBorderNum: 5,
    offset: 0,
    limit: 20,
    totalCount: 100,
    onChange: handleChangePaginationMock,
  };

  function getDefaultPagination(props) {
    return render(<Pagination {...defaultProps} {...props} />);
  }

  function renderPagination(props) {
    return getDefaultPagination(props);
  }

  test("Pagination is showing after first render when have items more than established limit(20)", () => {
    const { queryByTestId } = renderPagination();

    expect(queryByTestId("pagination")).toBeInTheDocument();
  });

  test("Pagination is hiding after first render when have items less than established limit(20)", () => {
    const { queryByTestId } = renderPagination({
      totalCount: 10,
    });
    expect(queryByTestId("pagination")).not.toBeInTheDocument();
  });

  test("Pagination at first pagination page", () => {
    const { queryByTestId } = renderPagination();
    expect(queryByTestId("pagination-button-prev")).not.toBeVisible();
    expect(queryByTestId("pagination-button-next")).toBeVisible();
  });

  test("Pagination at last pagination page", () => {
    const { getByTestId } = renderPagination({ offset: 80 });
    expect(getByTestId("pagination-button-prev")).toBeVisible();
    expect(getByTestId("pagination-button-next")).not.toBeVisible();
  });

  test("Pagination action must been called with correct offset(next page offset)", () => {
    const { getByTestId } = renderPagination();
    handleChangePaginationMock.mockClear();
    fireEvent.click(getByTestId("pagination-button-next"));
    expect(handleChangePaginationMock).toHaveBeenCalledTimes(1);
    expect(handleChangePaginationMock).toHaveBeenCalledWith({ offset: 20 });
  });

  test("Pagination action must been called with correct offset(prev page offset)", () => {
    const { getByTestId } = renderPagination({
      offset: 20,
      totalCount: 100,
    });
    handleChangePaginationMock.mockClear();

    fireEvent.click(getByTestId("pagination-button-prev"));
    expect(handleChangePaginationMock).toHaveBeenCalledTimes(1);
    expect(handleChangePaginationMock).toHaveBeenCalledWith({ offset: 0 });
  });
});

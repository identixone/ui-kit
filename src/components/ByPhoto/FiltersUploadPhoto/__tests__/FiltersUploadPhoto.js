import React from "react";
import { fireEvent } from "@testing-library/react";

import { render } from "../../../../../test/utils";
import { FiltersUploadPhoto } from "../index.jsx";
import { BrowserRouter as Router } from "react-router-dom";

describe("FiltersUploadPhoto tests", () => {
  const onUploadMock = jest.fn();

  afterEach(() => {
    onUploadMock.mockClear();
  });

  afterAll(() => {
    onUploadMock.mockReset();
  });

  const defaultProps = {
    onUpload: onUploadMock,
    render: () => <div>some content</div>,
    isLockDrop: false,
    isLockUpload: false,
  };

  function getDefaultFiltersUploadPhoto(props) {
    return render(
      <Router>
        <FiltersUploadPhoto {...defaultProps} {...props}></FiltersUploadPhoto>
      </Router>
    );
  }

  function renderFiltersUploadPhoto(props) {
    return getDefaultFiltersUploadPhoto(props);
  }

  test("FiltersUploadPhoto upload place in the document", () => {
    const { queryByTestId } = renderFiltersUploadPhoto();

    expect(queryByTestId("upload-place")).toBeInTheDocument();
  });

  test("FiltersUploadPhoto upload unlocked by default", () => {
    const { queryByTestId } = renderFiltersUploadPhoto();

    expect(queryByTestId("upload-input")).not.toBeDisabled();
  });

  test("FiltersUploadPhoto upload locked by flag", () => {
    const { queryByTestId } = renderFiltersUploadPhoto({ isLockUpload: true });

    expect(queryByTestId("upload-input")).toBeDisabled();
  });

  test("FiltersUploadPhoto action must been called once", () => {
    const { getByTestId } = renderFiltersUploadPhoto();
    fireEvent.change(getByTestId("upload-input"));
    expect(onUploadMock).toHaveBeenCalledTimes(1);
  });
});

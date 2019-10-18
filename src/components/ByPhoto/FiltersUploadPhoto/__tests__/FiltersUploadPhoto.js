import React from "react";
import { fireEvent } from "@testing-library/react";

import { render } from "../../../../../test/utils";
import { FiltersUploadPhoto } from "../index.jsx";
import { BrowserRouter as Router } from "react-router-dom";

describe("FiltersUploadPhoto tests", () => {
  const handleUploadFileMock = jest.fn();

  afterEach(() => {
    handleUploadFileMock.mockClear();
  });

  afterAll(() => {
    handleUploadFileMock.mockReset();
  });

  const defaultProps = {
    handleUploadFile: handleUploadFileMock,
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

    expect(queryByTestId("upload-target")).toHaveStyle("cursor: pointer");
  });

  test("FiltersUploadPhoto upload locked by flag", () => {
    const { queryByTestId } = renderFiltersUploadPhoto({ isLockUpload: true });

    expect(queryByTestId("upload-target")).toHaveStyle("cursor: default");
  });

  test("FiltersUploadPhoto action must been called once", () => {
    const { getByTestId } = renderFiltersUploadPhoto();
    handleUploadFileMock.mockClear();
    fireEvent.change(getByTestId("upload-input"));
    expect(handleUploadFileMock).toHaveBeenCalledTimes(1);
  });
});

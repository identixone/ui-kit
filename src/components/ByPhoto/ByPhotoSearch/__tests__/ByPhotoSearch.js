import React from "react";

import { render } from "../../../../../test/utils";
import { ByPhotoSearch } from "../index.jsx";
import { BrowserRouter as Router } from "react-router-dom";

describe("ByPhotoSearch tests", () => {
  const fetchEntriesMock = jest.fn();
  const clearResultMock = jest.fn();
  const onCreateFinishedMock = jest.fn();
  const handleUploadFileMock = jest.fn();
  const personSearchResultMock = {
    conf: "exact",
    idxid: "5d8b4cca-6306-4aca-971a-3104749fdf03",
    age: 25,
    sex: 0,
    mood: "neutral",
    liveness: "passed",
    idxid_created: "2019-07-03T11:15:00.170576Z",
    idxid_source: { name: "webcam" },
  };

  afterEach(() => {
    fetchEntriesMock.mockClear();
    clearResultMock.mockClear();
  });

  afterAll(() => {
    fetchEntriesMock.mockReset();
    clearResultMock.mockReset();
  });

  const defaultProps = {
    clearResult: clearResultMock,
    onCreateFinished: onCreateFinishedMock,
    handleUploadFile: handleUploadFileMock,
    hasDropped: false,
    isCreating: false,
    personSearchResult: null,
    error: null,
  };

  function getDefaultByPhotoSearch(props) {
    return render(
      <Router>
        <ByPhotoSearch {...defaultProps} {...props} />
      </Router>
    );
  }

  function renderByPhotoSearch(props) {
    return getDefaultByPhotoSearch(props);
  }

  test("ByPhotoSearch If have no created person and creation errors show message to create person", () => {
    const { queryByTestId } = renderByPhotoSearch({});

    expect(queryByTestId("search-person-mode")).toBeInTheDocument();
  });

  test("ByPhotoSearch If have created person show person message", () => {
    const { queryByTestId } = renderByPhotoSearch({
      personSearchResult: personSearchResultMock,
    });

    expect(queryByTestId("search-person-found-message")).toBeInTheDocument();
  });

  test("ByPhotoSearch If have creation error show error message", () => {
    const { queryByTestId } = renderByPhotoSearch({
      error: { status: 500, data: { detail: "Some server error" } },
    });

    expect(queryByTestId("search-person-error")).toBeInTheDocument();
  });
});

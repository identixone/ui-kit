import React from "react";

import { render } from "../../../../../test/utils";
import { ByPhotoSearch } from "../index.jsx";
import { BrowserRouter as Router } from "react-router-dom";

describe("ByPhotoSearch tests", () => {
  const clearResultMock = jest.fn();
  const onUploadEndMock = jest.fn();
  const onUploadMock = jest.fn();
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
  const personSearchErrorMock = {
    status: 500,
    data: { detail: "Some server error" },
  };

  afterEach(() => {
    clearResultMock.mockClear();
  });

  afterAll(() => {
    clearResultMock.mockReset();
  });

  const defaultProps = {
    clearResult: clearResultMock,
    onUploadEnd: onUploadEndMock,
    onUpload: onUploadMock,
    hasDropped: false,
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

  test("ByPhotoSearch If have no search result and search errors show message to search person", () => {
    const { queryByTestId } = renderByPhotoSearch({});

    expect(queryByTestId("search-person-message")).toHaveTextContent(
      "drag and drop file (.jpg, .png) or click to select"
    );
  });

  test("ByPhotoSearch If have search result show result message", () => {
    const { queryByTestId } = renderByPhotoSearch({
      personSearchResult: personSearchResultMock,
    });

    expect(queryByTestId("search-person-message")).toHaveTextContent(
      personSearchResultMock.idxid
    );
  });

  test("ByPhotoSearch If have search error show error message", () => {
    const { queryByTestId } = renderByPhotoSearch({
      error: personSearchErrorMock,
    });

    expect(queryByTestId("search-person-message")).toHaveTextContent(
      `Error ${personSearchErrorMock.status}`
    );
  });
});
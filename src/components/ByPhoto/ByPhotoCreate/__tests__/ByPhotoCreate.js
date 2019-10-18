import React from "react";

import { render } from "../../../../../test/utils";
import { ByPhotoCreate } from "../index.jsx";
import { BrowserRouter as Router } from "react-router-dom";

describe("ByPhotoCreate tests", () => {
  const fetchEntriesMock = jest.fn();
  const clearResultMock = jest.fn();
  const onCreateFinishedMock = jest.fn();
  const handleUploadFileMock = jest.fn();
  const createdPersonMock = {
    idxid: "5d8b4cca-6306-4aca-971a-3104749fdf03",
    age: 25,
    sex: 0,
    mood: "neutral",
    liveness: "passed",
    created: "2019-07-03T11:15:00.170576Z",
    source: "webcam",
    conf: "new",
  };
  const createdExistPersonMock = {
    idxid: "5d8b4cca-6306-4aca-971a-3104749fdf03",
    age: 25,
    sex: 0,
    mood: "neutral",
    liveness: "passed",
    created: "2019-07-03T11:15:00.170576Z",
    source: "webcam",
    conf: "exact",
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
    fetchEntries: fetchEntriesMock,
    clearResultMock: clearResultMock,
    createdPerson: null,
    createError: null,
    onCreateFinished: onCreateFinishedMock,
    handleUploadFile: handleUploadFileMock,
    hasDropped: false,
    isCreating: false,
  };

  function getDefaultByPhotoCreate(props) {
    return render(
      <Router>
        <ByPhotoCreate {...defaultProps} {...props}>
          <div>s</div>
        </ByPhotoCreate>
      </Router>
    );
  }

  function renderByPhotoCreate(props) {
    return getDefaultByPhotoCreate(props);
  }

  test("ByPhotoCreate If have no created person and creation errors show message to create person", () => {
    const { queryByTestId } = renderByPhotoCreate({});

    expect(queryByTestId("create-person-message")).toBeInTheDocument();
  });

  test("ByPhotoCreate If have created person show person message", () => {
    const { queryByTestId } = renderByPhotoCreate({
      createdPerson: createdPersonMock,
    });

    expect(queryByTestId("created-person-message")).toBeInTheDocument();
  });

  test("ByPhotoCreate If person already exist show message about it", () => {
    const { queryByTestId } = renderByPhotoCreate({
      createdPerson: createdExistPersonMock,
    });

    expect(queryByTestId("exist-person-message")).toBeInTheDocument();
  });

  test("ByPhotoCreate If have creation error show error message", () => {
    const { queryByTestId } = renderByPhotoCreate({
      createError: { status: 500, data: { detail: "Some server error" } },
    });

    expect(queryByTestId("create-error-message")).toBeInTheDocument();
  });
});

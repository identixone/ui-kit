import React from "react";

import { render } from "../../../../../test/utils";
import { ByPhotoCreate } from "../index.jsx";
import { BrowserRouter as Router } from "react-router-dom";

describe("ByPhotoCreate tests", () => {
  const fetchEntriesMock = jest.fn();
  const clearResultMock = jest.fn();
  const onEffectFinishedMock = jest.fn();
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
  const createErrorMock = {
    status: 404,
    data: {
      detail: "No person found in database",
    },
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
    onCreateFinished: onEffectFinishedMock,
    handleUploadFile: handleUploadFileMock,
    hasDropped: false,
    isPersonCreating: false,
  };

  function getDefaultByPhotoCreate(props) {
    return render(
      <Router>
        <ByPhotoCreate {...defaultProps} {...props} />
      </Router>
    );
  }

  function renderByPhotoCreate(props) {
    return getDefaultByPhotoCreate(props);
  }

  test("ByPhotoCreate If have no created person and creation errors show message to create person", () => {
    const { queryByTestId } = renderByPhotoCreate({});

    expect(queryByTestId("create-person-message")).toHaveTextContent(
      "drag and drop file (.jpg, .png) or click to select"
    );
  });

  test("ByPhotoCreate If have created person show person message", () => {
    const { queryByTestId } = renderByPhotoCreate({
      createdPerson: createdPersonMock,
    });

    expect(queryByTestId("create-person-message")).toHaveTextContent(
      createdPersonMock.idxid
    );
  });

  test("ByPhotoCreate If person already exist show message about it", () => {
    const { queryByTestId } = renderByPhotoCreate({
      createdPerson: createdExistPersonMock,
    });

    expect(queryByTestId("create-person-message")).toHaveTextContent(
      "Creation error, such person exists"
    );
  });

  test("ByPhotoCreate If have creation error show error message", () => {
    const { queryByTestId } = renderByPhotoCreate({
      createError: createErrorMock,
    });

    expect(queryByTestId("create-person-message")).toHaveTextContent(
      `Error ${createErrorMock.status}`
    );
  });
});

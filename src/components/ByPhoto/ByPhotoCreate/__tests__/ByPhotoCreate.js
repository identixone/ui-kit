import React from "react";

import { render } from "../../../../../test/utils";
import { ByPhotoCreate } from "../index.jsx";
import { BrowserRouter as Router } from "react-router-dom";

describe("ByPhotoCreate tests", () => {
  const clearResultMock = jest.fn();
  const onUploadEndMock = jest.fn();
  const onUploadMock = jest.fn();
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
  const errorMock = {
    status: 404,
    data: {
      detail: "No person found in database",
    },
  };

  afterEach(() => {
    clearResultMock.mockClear();
  });

  afterAll(() => {
    clearResultMock.mockReset();
  });

  const defaultProps = {
    clearResultMock: clearResultMock,
    createdPerson: null,
    createError: null,
    onUploadEnd: onUploadEndMock,
    onUpload: onUploadMock,
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
      createError: errorMock,
    });

    expect(queryByTestId("create-person-message")).toHaveTextContent(
      `Error ${errorMock.status}`
    );
  });
});

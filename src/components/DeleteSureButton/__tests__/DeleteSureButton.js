import React from "react";
import { fireEvent } from "@testing-library/react";

import { render } from "../../../../test/utils";
import { DeleteSureButton } from "../index.jsx";

describe("DeleteSureButton tests", () => {
  const onDeleteMock = jest.fn();

  afterEach(() => {
    onDeleteMock.mockClear();
  });
  afterAll(() => {
    onDeleteMock.mockReset();
  });

  const defaultProps = {
    onDelete: onDeleteMock,
    isDisabled: false,
  };

  function getDefaultDeleteSureButton(props) {
    return render(<DeleteSureButton {...defaultProps} {...props} />);
  }

  function renderDeleteSureButton(props) {
    return getDefaultDeleteSureButton(props);
  }

  test("DeleteSureButton renders inside text correctly", () => {
    const deleteText = "some delete text";
    const sureText = "some sure text";

    const { getByTestId } = renderDeleteSureButton({
      deleteText,
      sureText,
    });

    expect(getByTestId("delete-button")).toHaveTextContent(deleteText);

    fireEvent.mouseEnter(getByTestId("delete-button"));
    expect(getByTestId("delete-button")).toHaveTextContent(deleteText);

    fireEvent.click(getByTestId("delete-button"));
    expect(getByTestId("delete-button")).toHaveTextContent(sureText);

    fireEvent.mouseLeave(getByTestId("delete-button"));
    expect(getByTestId("delete-button")).toHaveTextContent(deleteText);

    fireEvent.click(getByTestId("delete-button"));
    fireEvent.click(getByTestId("delete-button"));
    expect(getByTestId("delete-button")).toHaveTextContent(deleteText);
  });

  test("DeleteSureButton calls onDelete callback correctly", () => {
    const { getByTestId } = renderDeleteSureButton();

    fireEvent.click(getByTestId("delete-button"));
    fireEvent.click(getByTestId("delete-button"));

    expect(onDeleteMock).toHaveBeenCalledTimes(1);
  });
});

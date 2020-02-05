import React from "react";

import { DeleteSureButton } from "../index";

import { fireEvent } from "@testing-library/react";
import { renderWithProviders as render } from "../../../../test/utils";

const componentName = "delete-button";
const nonDeleteText = "delete";
const deleteText = "sure?";
const onDeleteMock = jest.fn();

afterEach(() => {
  onDeleteMock.mockClear();
});

afterAll(() => {
  onDeleteMock.mockReset();
});

function renderDeleteButton(props) {
  return render(
    <DeleteSureButton
      sureText={deleteText}
      deleteText={nonDeleteText}
      onDelete={onDeleteMock}
      data-testid={componentName}
      {...props}
    />
  );
}

describe("DeleteSureButton tests", () => {
  // test("DeleteSureButton should render text inside button correctly", () => {
  //   const { getByTestId } = renderDeleteButton();

  //   expect(getByTestId(componentName)).toHaveTextContent(nonDeleteText);

  //   fireEvent.click(getByTestId(componentName));

  //   expect(getByTestId(componentName)).toHaveTextContent(deleteText);

  //   fireEvent.mouseLeave(getByTestId(componentName));

  //   expect(getByTestId(componentName)).toHaveTextContent(nonDeleteText);
  // });

  test.only("DeleteSureButton should call onDelete correctly", () => {
    const { getByTestId } = renderDeleteButton();

    fireEvent.click(getByTestId(componentName));
    expect(onDeleteMock.mock.calls).toHaveLength(0);

    fireEvent.click(getByTestId(componentName));
    expect(onDeleteMock.mock.calls).toHaveLength(1);
  });
});

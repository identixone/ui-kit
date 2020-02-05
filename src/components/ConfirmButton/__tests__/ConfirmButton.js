import React from "react";

import { ConfirmButton } from "../index";

import { fireEvent } from "@testing-library/react";
import { render } from "../../../../test/utils";

const componentName = "confirm-button";
const nonConfirmText = "click";
const confirmText = "sure?";
const onConfirmMock = jest.fn();

afterEach(() => {
  onConfirmMock.mockClear();
});

afterAll(() => {
  onConfirmMock.mockReset();
});

function renderConfirmButton(props) {
  return render(
    <ConfirmButton
      data-testid={componentName}
      onConfirm={onConfirmMock}
      {...props}
    >
      {({ isConfirm }) => (isConfirm ? confirmText : nonConfirmText)}
    </ConfirmButton>
  );
}

describe("ConfirmButton tests", () => {
  test("ConfirmButton should render text inside button correctly", () => {
    const { getByTestId } = renderConfirmButton();

    expect(getByTestId(componentName)).toHaveTextContent(nonConfirmText);

    fireEvent.click(getByTestId(componentName));

    expect(getByTestId(componentName)).toHaveTextContent(confirmText);

    fireEvent.mouseLeave(getByTestId(componentName));

    expect(getByTestId(componentName)).toHaveTextContent(nonConfirmText);
  });

  test("ConfirmButton should call onConfirm correctly", () => {
    const { getByTestId } = renderConfirmButton();

    fireEvent.click(getByTestId(componentName));
    expect(onConfirmMock.mock.calls).toHaveLength(0);

    fireEvent.click(getByTestId(componentName));
    expect(onConfirmMock.mock.calls).toHaveLength(1);
  });
});

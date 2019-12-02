import React from "react";
import { fireEvent } from "@testing-library/react";

import { render } from "../../../../test/utils";
import { Tooltip } from "../index.jsx";

describe("Tooltip tests", () => {
  const onChangeMock = jest.fn();
  afterEach(() => {
    onChangeMock.mockClear();
  });

  afterAll(() => {
    onChangeMock.mockReset();
  });

  function getDefaultTooltip() {
    return render(
      <Tooltip title={"Test tooltip text"}>
        <span data-testid="tooltip-trigger-content">Text with Tooltip</span>
      </Tooltip>
    );
  }

  function renderTooltip(props) {
    return getDefaultTooltip(props);
  }

  test("Tooltip trigger open and close popup", () => {
    const { getByTestId } = renderTooltip();
    fireEvent.mouseEnter(getByTestId("tooltip-trigger-content"));
    expect(getByTestId("tooltip-inner")).toBeVisible();
    fireEvent.mouseLeave(getByTestId("tooltip-trigger-content"));
    expect(getByTestId("tooltip-inner")).not.toBeVisible();
  });
});

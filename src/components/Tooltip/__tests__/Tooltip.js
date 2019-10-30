import React from "react";
import { fireEvent } from "@testing-library/react";

import { render } from "../../../../test/utils";
import { Tooltip } from "../index.js";

describe("Tooltip tests", () => {
  const handleDeleteMock = jest.fn();

  afterEach(() => {
    handleDeleteMock.mockClear();
  });

  afterAll(() => {
    handleDeleteMock.mockReset();
  });

  const defaultProps = {
    initialOpen: false,
    title: "Tooltip title",
  };

  function getDefaultTooltip(props) {
    return render(
      <Tooltip {...defaultProps} {...props}>
        Tooltip content
      </Tooltip>
    );
  }

  function renderTooltip(props) {
    return getDefaultTooltip(props);
  }

  test("Tooltip show when mouse is over and hide when mouse is out", async () => {
    const { queryByTestId } = renderTooltip();

    expect(queryByTestId("tooltip-container")).toHaveStyle("opacity: 0");
    fireEvent.mouseOver(queryByTestId("tooltip-trigger"));
    expect(queryByTestId("tooltip-container")).toHaveStyle("opacity: 1");
    fireEvent.mouseOut(queryByTestId("tooltip-trigger"));
    expect(queryByTestId("tooltip-container")).toHaveStyle("opacity: 0");
  });
});

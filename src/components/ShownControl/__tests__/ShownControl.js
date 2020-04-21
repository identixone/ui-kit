import React from "react";
import { fireEvent } from "@testing-library/react";

import { render } from "../../../../test/utils";
import { ShownControl } from "../index.jsx";

describe("ShownControl tests", () => {
  const handleChangePaginationMock = jest.fn();
  afterEach(() => {
    handleChangePaginationMock.mockClear();
  });

  afterAll(() => {
    handleChangePaginationMock.mockReset();
  });

  function renderShownControl() {
    return render(
      <ShownControl
        limit={20}
        count={100}
        offset={0}
        totalCount={100}
        onChange={handleChangePaginationMock}
      >
        some text
      </ShownControl>
    );
  }

  test("ShownControl at first pagination page", () => {
    const { getByTestId } = renderShownControl();
    expect(getByTestId("shownControl-button-prev")).toBeDisabled();
    expect(getByTestId("shownControl-button-next")).not.toBeDisabled();
  });

  test("ShownControl at last pagination page", () => {
    const { getByTestId, rerender } = renderShownControl();
    rerender(
      <ShownControl
        limit={20}
        count={100}
        offset={80}
        totalCount={100}
        onChange={handleChangePaginationMock}
      >
        some text
      </ShownControl>
    );
    expect(getByTestId("shownControl-button-prev")).not.toBeDisabled();
    expect(getByTestId("shownControl-button-next")).toBeDisabled();
  });

  test("ShownControl disabled all if limit more than items length", () => {
    const { getByTestId, rerender } = renderShownControl();
    rerender(
      <ShownControl
        limit={20}
        count={10}
        offset={0}
        totalCount={10}
        onChange={handleChangePaginationMock}
      >
        some text
      </ShownControl>
    );
    expect(getByTestId("shownControl-button-prev")).toBeDisabled();
    expect(getByTestId("shownControl-button-next")).toBeDisabled();
  });

  test("ShownControl action must been called with correct offset(next page offset)", () => {
    const { getByTestId } = renderShownControl();
    fireEvent.click(getByTestId("shownControl-button-next"));
    expect(handleChangePaginationMock).toHaveBeenCalledWith({ offset: 20 });
  });

  test("ShownControl action must been called with correct offset(next page offset)", () => {
    const { getByTestId, rerender } = renderShownControl();

    rerender(
      <ShownControl
        limit={20}
        count={100}
        offset={20}
        totalCount={100}
        onChange={handleChangePaginationMock}
      >
        some text
      </ShownControl>
    );
    fireEvent.click(getByTestId("shownControl-button-prev"));
    expect(handleChangePaginationMock).toHaveBeenCalledWith({ offset: 0 });
  });
});

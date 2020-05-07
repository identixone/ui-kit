import React from "react";
import { fireEvent } from "@testing-library/react";

import { render } from "../../../../test/utils";
import { ListItemPopup } from "../index.jsx";

describe("ListItemPopup tests", () => {
  const onChangeMock = jest.fn();
  afterEach(() => {
    onChangeMock.mockClear();
  });

  afterAll(() => {
    onChangeMock.mockReset();
  });

  function getDefaultListItemPopup() {
    return render(
      <ListItemPopup
        trigger={({ ref, openPortal }) => (
          <button data-testid="button-open" ref={ref} onClick={openPortal}>
            open
          </button>
        )}
      >
        {({ closePortal }) => (
          <React.Fragment>
            <button data-testid="button-close" onClick={closePortal}>
              close
            </button>
            <span data-testid="list-item-popup-content">
              Popup content example
            </span>
          </React.Fragment>
        )}
      </ListItemPopup>
    );
  }

  function renderListItemPopup(props) {
    return getDefaultListItemPopup(props);
  }

  test("ListItemPopup trigger open and close popup", () => {
    const { getByTestId } = renderListItemPopup();

    fireEvent.click(getByTestId("button-open"));
    expect(getByTestId("list-item-popup-content")).toBeVisible();

    fireEvent.click(getByTestId("button-close"));
    expect(getByTestId("list-item-popup-content")).not.toBeVisible();
  });
});

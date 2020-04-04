import React from "react";
import { fireEvent } from "@testing-library/react";

import { render } from "../../../../test/utils";
import { ListItemPopup } from "../index.jsx";
import { Qrcode as QRCodeIcon } from "../../icons";

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
          <QRCodeIcon
            data-testid="qr-code-icon"
            ref={ref}
            cursor="pointer"
            width="19"
            height="19"
            onClick={openPortal}
          />
        )}
      >
        {({ closePortal }) => (
          <React.Fragment>
            <QRCodeIcon
              data-testid="qr-code-icon-inside"
              width="19"
              height="19"
              onClick={closePortal}
            />
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
    fireEvent.click(getByTestId("qr-code-icon"));
    expect(getByTestId("list-item-popup-content")).toBeVisible();
    fireEvent.click(getByTestId("qr-code-icon-inside"));
    expect(getByTestId("list-item-popup-content")).not.toBeVisible();
  });
});

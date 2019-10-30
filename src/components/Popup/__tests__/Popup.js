import React from "react";

import { Popup } from "../index.jsx";

import { render } from "../../../../test/utils";
import styled from "styled-components";

const PopupContentContainer = styled.div`
  position: absolute;
  left: ${({ left }) => `${left}px`};
  top: ${({ top }) => `${top}px`};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  overflow: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  height: ${({ isOpen }) => (isOpen ? "auto" : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
`;

const PopupContentInner = styled.div`
  height: 100%;
  padding: 8px 14px;
  position: relative;
`;

describe("Popup tests", () => {
  const handleDeleteMock = jest.fn();

  afterEach(() => {
    handleDeleteMock.mockClear();
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        width: 20,
        height: 20,
        top: 50,
        left: 50,
      };
    });
  });

  afterAll(() => {
    handleDeleteMock.mockReset();
  });

  const popupTrigger = React.createRef();

  function getDefaultPopup({ isOpen, position } = {}) {
    return render(
      <React.Fragment>
        <span data-testid="popup-trigger" ref={popupTrigger}>
          <div>trigger</div>
        </span>
        <Popup
          position={position}
          isOpen={isOpen}
          pupupTrigger={popupTrigger}
          render={({ isOpen, left, top, popupInner }) => (
            <PopupContentContainer
              data-testid="popup-content-container"
              isOpen={isOpen}
              left={left}
              top={top}
            >
              <PopupContentInner ref={popupInner}>Popup text</PopupContentInner>
            </PopupContentContainer>
          )}
        />
      </React.Fragment>
    );
  }

  function renderPopup(props) {
    return getDefaultPopup(props);
  }

  test("Popup hide content when it's not open", async () => {
    const { queryByTestId } = renderPopup();

    expect(queryByTestId("popup-content-container")).toBeInTheDocument();
    expect(queryByTestId("popup-content-container")).toHaveStyle("opacity: 0");
  });

  test("Popup change position when change position prop to 'right'", async () => {
    const { queryByTestId } = renderPopup({ isOpen: true, position: "right" });

    expect(queryByTestId("popup-content-container")).toHaveStyle("opacity: 1");
    expect(queryByTestId("popup-content-container")).toHaveStyle("top: 40px");
    expect(queryByTestId("popup-content-container")).toHaveStyle("left: 80px");
  });

  test("Popup change position when change position prop to 'top'", async () => {
    const { queryByTestId } = renderPopup({ isOpen: true, position: "top" });

    expect(queryByTestId("popup-content-container")).toHaveStyle("opacity: 1");
    expect(queryByTestId("popup-content-container")).toHaveStyle("top: 45px");
    expect(queryByTestId("popup-content-container")).toHaveStyle("left: 45px");
  });
});

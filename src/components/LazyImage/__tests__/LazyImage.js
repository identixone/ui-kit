import React from "react";

import { render } from "../../../../test/utils";

import { LazyImage } from "../index.jsx";

describe("ButtonToggle tests", () => {
  const onLoadMock = jest.fn();

  const LOAD_SUCCESS_SRC = "https://source.unsplash.com/random/100x100";

  afterEach(() => {
    onLoadMock.mockClear();
  });

  afterAll(() => {
    onLoadMock.mockReset();
  });

  const defaultProps = {
    onLoad: onLoadMock,
    src: LOAD_SUCCESS_SRC,
  };

  function getDefaultLazyImage(props) {
    return render(<LazyImage {...defaultProps} {...props} />);
  }

  function renderLazyImage(props) {
    return getDefaultLazyImage(props);
  }

  test("LazyImage image not visible on initial render", () => {
    const { getByTestId } = renderLazyImage();

    expect(getByTestId("lazy-image")).not.toBeVisible();
  });

  /**
   * TODO: разобраться, как мокать вызов `onLoad` у HTML img
   */
  test.skip("LazyImage renders image after image load", () => {
    const { getByTestId } = renderLazyImage();

    expect(getByTestId("lazy-image")).toBeVisible();
    expect(getByTestId("lazy-image")).toHaveAttribute("src", defaultProps.src);
  });
});

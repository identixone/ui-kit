import React from "react";
import { fireEvent } from "@testing-library/react";

import { render } from "../../../../test/utils";
import { ButtonToggle } from "../index.jsx";
import { Plus } from "../../../assets/icons";
import colors from "../../../themes/colors";

describe("ButtonToggle tests", () => {
  const handleChangeButtonToggleMock = jest.fn();
  afterEach(() => {
    handleChangeButtonToggleMock.mockClear();
  });

  afterAll(() => {
    handleChangeButtonToggleMock.mockReset();
  });

  const defaultProps = {
    icon: <Plus />,
    mode: "blue",
    isActive: true,
    onChange: handleChangeButtonToggleMock,
  };

  function getDefaultButtonToggle(props) {
    return render(
      <ButtonToggle {...defaultProps} {...props}>
        ButtonText
      </ButtonToggle>
    );
  }

  function renderButtonToggle(props) {
    return getDefaultButtonToggle(props);
  }

  test("ButtonToggle have 'blue' mode style", () => {
    const { getByTestId } = renderButtonToggle();
    fireEvent.click(getByTestId("button-toggle"));
    expect(getByTestId("button-toggle")).toHaveStyle(
      `background-color: ${colors.darkestBlue}`
    );
  });

  test("ButtonToggle action must been called", () => {
    const { getByTestId } = renderButtonToggle();
    handleChangeButtonToggleMock.mockClear();
    fireEvent.click(getByTestId("button-toggle"));
    expect(handleChangeButtonToggleMock).toHaveBeenCalledTimes(1);
  });
});

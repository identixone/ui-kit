import React from "react";
import { fireEvent } from "@testing-library/react";

import { render } from "../../../../test/utils";
import { ButtonToggle } from "../index.jsx";
import { Plus } from "../../../assets/icons";

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
    onChange: handleChangeButtonToggleMock,
  };

  function getDefaultButtonToggle(props) {
    return render(
      <ButtonToggle {...defaultProps} {...props}>
        <div>s</div>
      </ButtonToggle>
    );
  }

  function renderButtonToggle(props) {
    return getDefaultButtonToggle(props);
  }

  test("ButtonToggle is showing after first render", () => {
    const { queryByTestId } = renderButtonToggle();

    expect(queryByTestId("button-toggle")).toBeInTheDocument();
  });

  test("ButtonToggle have 'blue' mode style", () => {
    const { getByTestId } = renderButtonToggle();
    expect(getByTestId("button-toggle")).toHaveStyle(
      "background-color: #f3f3f3"
    );
  });

  test("ButtonToggle action must been called", () => {
    const { getByTestId } = renderButtonToggle();
    handleChangeButtonToggleMock.mockClear();
    fireEvent.click(getByTestId("button-toggle"));
    expect(handleChangeButtonToggleMock).toHaveBeenCalledTimes(1);
  });
});

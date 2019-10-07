import React from "react";
import { fireEvent } from "@testing-library/react";

import { render } from "../../../../test/utils";
import { ButtonToggleWrapper } from "../index.jsx";
import { Plus } from "../../../assets/icons";

describe("ButtonToggleWrapper tests", () => {
  const handleChangeButtonToggleWrapperMock = jest.fn();
  afterEach(() => {
    handleChangeButtonToggleWrapperMock.mockClear();
  });

  afterAll(() => {
    handleChangeButtonToggleWrapperMock.mockReset();
  });

  const defaultProps = {
    icon: <Plus />,
    mode: "blue",
    onChange: handleChangeButtonToggleWrapperMock,
  };

  function getDefaultButtonToggleWrapper(props) {
    return render(
      <ButtonToggleWrapper {...defaultProps} {...props}>
        <div>s</div>
      </ButtonToggleWrapper>
    );
  }

  function renderButtonToggleWrapper(props) {
    return getDefaultButtonToggleWrapper(props);
  }

  test.skip("ButtonToggleWrapper is showing after first render", () => {
    const { queryByTestId } = renderButtonToggleWrapper();

    expect(queryByTestId("button-toggle")).toBeInTheDocument();
  });

  test.skip("ButtonToggleWrapper have 'blue' mode style", () => {
    const { getByTestId } = renderButtonToggleWrapper();
    expect(getByTestId("button-toggle")).toHaveStyle(
      "background-color",
      "#f3f3f3"
    );
  });

  test.skip("ButtonToggleWrapper action must been called with correct offset(next page offset)", () => {
    const { getByTestId } = renderButtonToggleWrapper();
    handleChangeButtonToggleWrapperMock.mockClear();
    fireEvent.click(getByTestId("button-toggle"));
    expect(handleChangeButtonToggleWrapperMock).toHaveBeenCalledTimes(1);
  });
});

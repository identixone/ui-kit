import React from "react";

import { fireEvent } from "@testing-library/react";
import { render } from "../../../../test/utils";

import { Search } from "../index";

describe("Search tests", () => {
  function renderSearch() {
    class SearchWrapper extends React.Component {
      state = {
        value: "",
      };

      handleChange = ({ target: { value } }) => {
        this.setState({ value });
      };

      render() {
        return <Search value={this.state.value} onChange={this.handleChange} />;
      }
    }

    return render(<SearchWrapper />);
  }

  test("Search renders clear button only when input has value", () => {
    const { queryByTestId, getByTestId } = renderSearch();

    expect(queryByTestId("search-clear-btn")).not.toBeInTheDocument();

    fireEvent.change(getByTestId("search-input"), {
      target: { value: "query" },
    });

    expect(queryByTestId("search-clear-btn")).toBeInTheDocument();

    fireEvent.click(queryByTestId("search-clear-btn"));

    expect(queryByTestId("search-clear-btn")).not.toBeInTheDocument();
  });
});

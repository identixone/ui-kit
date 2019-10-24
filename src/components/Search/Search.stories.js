import React from "react";
import { storiesOf } from "@storybook/react";

import { Search } from "./index.jsx";

storiesOf("Search", module).add("default", () => {
  class SearchValueWrapper extends React.Component {
    state = {
      value: "",
    };

    handleChange = ({ target: { value } }) => {
      this.setState({ value });
    };

    render() {
      return (
        <Search
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Start enter name..."
        />
      );
    }
  }

  return <SearchValueWrapper />;
});

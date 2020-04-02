import React from "react";

import { useState } from "react";

import { storiesOf } from "@storybook/react";

import { Search } from "./index.jsx";

storiesOf("Search", module)
  .add("default", () => {
    function SearchWrapper() {
      const [value, setValue] = useState("");

      return (
        <Search
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
          placeholder="Start enter name..."
        />
      );
    }

    return <SearchWrapper />;
  })
  .add("compact", () => {
    function SearchWrapper() {
      const [value, setValue] = useState("");

      return (
        <Search.Compact
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
          placeholder="Start enter name..."
        />
      );
    }

    return <SearchWrapper />;
  });

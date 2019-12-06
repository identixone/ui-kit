import React from "react";

import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { InifiniteDropdown } from "./index.jsx";
import { generateSourcesStats } from "../../../test/generate";

storiesOf("Basic UI|InifiniteDropdown", module)
  .add("default", () => {
    const options = generateSourcesStats(10).map(option => ({
      label: option.name,
      value: option.id,
    }));
    const isFetching = boolean("is fetching", false);

    return (
      <InifiniteDropdown
        options={options}
        fetchOptions={action("fetch items")}
        isFetching={isFetching}
        placeholder={isFetching ? "Loading..." : "Select value..."}
        width={240}
        withSearch={boolean("with search", false)}
      />
    );
  })
  .add("with custom item render", () => {
    const options = generateSourcesStats(10).map(option => ({
      label: option.name,
      value: option.id,
    }));
    const isFetching = boolean("is fetching", false);

    function isEven(n) {
      n = Number(n);
      return n === 0 || !!(n && !(n % 2));
    }

    return (
      <InifiniteDropdown
        options={options}
        fetchOptions={action("fetch items")}
        isFetching={isFetching}
        placeholder={isFetching ? "Loading..." : "Select value..."}
        width={240}
        withSearch={boolean("with search", false)}
        renderItem={item => (
          <span>{`${isEven(item.value) ? "🍎" : "🍌"} ${item.label}`}</span>
        )}
      />
    );
  });

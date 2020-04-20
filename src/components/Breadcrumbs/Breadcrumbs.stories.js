import React from "react";
import { storiesOf } from "@storybook/react";

import { useState } from "react";

import { Breadcrumbs } from "./index.jsx";

storiesOf("Navigation|Breadcrumbs", module).add("default", () => {
  const [active, setActive] = useState("first");
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item
        isActive={active === "first"}
        onClick={() => {
          setActive("first");
        }}
      >
        First
      </Breadcrumbs.Item>
      <Breadcrumbs.Item
        isActive={active === "second"}
        onClick={() => {
          setActive("second");
        }}
      >
        Second
      </Breadcrumbs.Item>
      <Breadcrumbs.Item
        isActive={active === "thrid"}
        onClick={() => {
          setActive("thrid");
        }}
      >
        Thrid
      </Breadcrumbs.Item>
    </Breadcrumbs>
  );
});

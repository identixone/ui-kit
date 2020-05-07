import React from "react";
import { storiesOf } from "@storybook/react";
import { number, text, boolean } from "@storybook/addon-knobs";

import { useState } from "react";

import { FormDropdown } from "./index";

import { generateOptions } from "../../../../../test/generate";

function isEven(n) {
  n = Number(n);
  return n === 0 || !!(n && !(n % 2));
}

storiesOf("Form Components/FormDropdown", module)
  .add("default", () => {
    const options = generateOptions(15);

    function ComponentWrapper() {
      const [selected, setSelected] = useState(null);

      return (
        <FormDropdown
          options={options}
          placeholder={text("placeholder", "select smth")}
          value={selected}
          onChange={setSelected}
          width={number("width", 200)}
          withSearch={boolean("with search", false)}
          multiple={boolean("multiple", false)}
          disabled={boolean("disabled", false)}
        />
      );
    }

    return <ComponentWrapper />;
  })
  .add("with default option", () => {
    const options = [
      {
        label: "default",
        value: "some_default_value",
        default: true,
      },
    ].concat(generateOptions(3));

    function ComponentWrapper() {
      const [selected, setSelected] = useState(null);

      return (
        <FormDropdown
          options={options}
          placeholder={text("placeholder", "select smth")}
          value={selected}
          onChange={setSelected}
          width={number("width", 200)}
          withSearch={boolean("with search", false)}
          multiple={boolean("multiple", false)}
          disabled={boolean("disabled", false)}
        />
      );
    }

    return <ComponentWrapper />;
  })
  .add("multiple", () => {
    const options = generateOptions(3);

    function ComponentWrapper() {
      const [selected, setSelected] = useState([]);

      return (
        <FormDropdown
          options={options}
          placeholder={text("placeholder", "select smth")}
          value={selected}
          onChange={setSelected}
          multiple={true}
          width={number("width", 200)}
          withSearch={boolean("with search", false)}
          disabled={boolean("disabled", false)}
        />
      );
    }

    return <ComponentWrapper />;
  })
  .add("multiple with default options", () => {
    const options = [
      {
        label: "default1",
        value: "some_default_value_1",
        default: true,
      },
      {
        label: "default2",
        value: "some_default_value_2",
        default: true,
      },
    ].concat(generateOptions(3));

    function ComponentWrapper() {
      const [selected, setSelected] = useState([]);

      return (
        <FormDropdown
          options={options}
          placeholder={text("placeholder", "select smth")}
          value={selected}
          onChange={setSelected}
          multiple={true}
          width={number("width", 200)}
          withSearch={boolean("with search", false)}
          disabled={boolean("disabled", false)}
        />
      );
    }

    return <ComponentWrapper />;
  })
  .add("multiple with single option", () => {
    const options = [
      {
        label: "single",
        value: "some_single_value",
        single: true,
      },
    ].concat(generateOptions(3));

    function ComponentWrapper() {
      const [selected, setSelected] = useState([options[0]]);

      return (
        <FormDropdown
          options={options}
          placeholder={text("placeholder", "select smth")}
          value={selected}
          onChange={setSelected}
          multiple={true}
          width={number("width", 200)}
          withSearch={boolean("with search", false)}
          disabled={boolean("disabled", false)}
        />
      );
    }

    return <ComponentWrapper />;
  })
  .add("with search", () => {
    const options = generateOptions(15);

    function ComponentWrapper() {
      const [selected, setSelected] = useState(null);

      return (
        <FormDropdown
          options={options}
          placeholder={text("placeholder", "select smth")}
          value={selected}
          onChange={setSelected}
          width={number("width", 200)}
          withSearch={true}
          disabled={boolean("disabled", false)}
        />
      );
    }

    return <ComponentWrapper />;
  })
  .add("multiple with search", () => {
    const options = generateOptions(15);

    function ComponentWrapper() {
      const [selected, setSelected] = useState([]);

      return (
        <FormDropdown
          options={options}
          placeholder={text("placeholder", "select smth")}
          value={selected}
          onChange={setSelected}
          width={number("width", 200)}
          multiple={true}
          withSearch={true}
          disabled={boolean("disabled", false)}
        />
      );
    }

    return <ComponentWrapper />;
  })
  .add("with custom item render", () => {
    const options = generateOptions(15);

    function ComponentWrapper() {
      const [selected, setSelected] = useState(null);

      return (
        <FormDropdown
          options={options}
          placeholder={text("placeholder", "select smth")}
          value={selected}
          onChange={setSelected}
          width={number("width", 200)}
          withSearch={boolean("with search", false)}
          disabled={boolean("disabled", false)}
          renderItem={(item) => (
            <span>{`${isEven(item.value) ? "🍎" : "🍌"} ${item.label}`}</span>
          )}
        />
      );
    }

    return <ComponentWrapper />;
  })
  .add("with disabled options", () => {
    const options = generateOptions(15).map((option, index) =>
      (index + 1) % 4 === 0 ? { ...option, disabled: true } : option
    );

    function ComponentWrapper() {
      const [selected, setSelected] = useState(null);

      return (
        <FormDropdown
          options={options}
          placeholder={text("placeholder", "select smth")}
          value={selected}
          onChange={setSelected}
          width={number("width", 200)}
          withSearch={boolean("with search", false)}
          disabled={boolean("disabled", false)}
        />
      );
    }

    return <ComponentWrapper />;
  });

import React from "react";

import { useContext } from "react";
import { DatePickerContext } from "../index";

import { DatePickerRelativePicker } from "./DatePickerRelativePicker";

function DatePickerRelative() {
  const { value, onChange } = useContext(DatePickerContext);

  return <DatePickerRelativePicker value={value} onChange={onChange} />;
}

export { DatePickerRelative };

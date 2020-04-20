import React from "react";

import { useContext } from "react";
import { DatePickerContext } from "../index";

import { DatePickerDateTimePicker } from "./DatePickerDateTimePicker";

function DatePickerAbsolute() {
  const { value, onChange } = useContext(DatePickerContext);

  return <DatePickerDateTimePicker value={value} onChange={onChange} />;
}

export { DatePickerAbsolute };

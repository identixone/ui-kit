import React from "react";
import { useContext } from "react";
import { DatePickerContext } from "../index";

import { StyledDatePickerError } from "./StyledDatePickerError";

function DatePickerError() {
  const { error } = useContext(DatePickerContext);

  return error ? <StyledDatePickerError>{error}</StyledDatePickerError> : null;
}

export { DatePickerError };

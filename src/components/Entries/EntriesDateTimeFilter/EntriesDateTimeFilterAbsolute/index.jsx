import React from "react";

import { useContext } from "react";
import { EntriesDateTimeFilterContext } from "../index";

import { EntriesDateTimeFilterDateTimePicker } from "./EntriesDateTimeFilterDateTimePicker";

function EntriesDateTimeFilterAbsolute() {
  const { value, onChange } = useContext(EntriesDateTimeFilterContext);

  return (
    <EntriesDateTimeFilterDateTimePicker value={value} onChange={onChange} />
  );
}

export { EntriesDateTimeFilterAbsolute };

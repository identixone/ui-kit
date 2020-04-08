import React from "react";

import { useContext } from "react";
import { EntriesDateTimeFilterContext } from "../index";

import { EntriesDateTimeFilterRelativePicker } from "./EntriesDateTimeFilterRelativePicker";

function EntriesDateTimeFilterRelative() {
  const { value, onChange, initialDateTo } = useContext(
    EntriesDateTimeFilterContext
  );

  return (
    <EntriesDateTimeFilterRelativePicker
      value={value}
      onChange={onChange}
      currentDate={initialDateTo}
    />
  );
}

export { EntriesDateTimeFilterRelative };

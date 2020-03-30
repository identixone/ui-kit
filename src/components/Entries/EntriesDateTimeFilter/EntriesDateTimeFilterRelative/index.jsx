import React from "react";

import { useContext } from "react";
import { EntriesDateTimeFilterContext } from "../index";

import { EntriesDateTimeFilterRelativePicker } from "./EntriesDateTimeFilterRelativePicker";

function EntriesDateTimeFilterRelative() {
  const { value, onChange } = useContext(EntriesDateTimeFilterContext);

  return (
    <EntriesDateTimeFilterRelativePicker value={value} onChange={onChange} />
  );
}

export { EntriesDateTimeFilterRelative };

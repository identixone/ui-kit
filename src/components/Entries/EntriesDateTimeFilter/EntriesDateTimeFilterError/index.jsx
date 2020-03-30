import React from "react";
import { useContext } from "react";
import { EntriesDateTimeFilterContext } from "../index";

import { StyledEntriesDateTimeFilterError } from "./StyledEntriesDateTimeFilterError";

function EntriesDateTimeFilterError() {
  const { error } = useContext(EntriesDateTimeFilterContext);

  return error ? (
    <StyledEntriesDateTimeFilterError>{error}</StyledEntriesDateTimeFilterError>
  ) : null;
}

export { EntriesDateTimeFilterError };

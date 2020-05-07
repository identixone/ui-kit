import React from "react";

import { useLocalId } from "./hooks";

import { Value } from "../Value";

function IdFormat(props) {
  const { localId, shortLocalId } = useLocalId(props);

  return (
    <Value value={localId} defaultValue={null}>
      {shortLocalId}
    </Value>
  );
}

export { IdFormat };

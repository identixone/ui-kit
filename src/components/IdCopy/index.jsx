import React from "react";

import { useLocalId } from "../IdFormat/hooks";

import { CopyItem } from "../CopyItem";
import { Value } from "../Value";

function IdCopy(props) {
  const { localId, shortLocalId } = useLocalId(props);

  return (
    <Value value={localId} defaultValue={null}>
      <CopyItem value={localId}>{shortLocalId}</CopyItem>
    </Value>
  );
}

export { IdCopy };

import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import { IdCopy } from "./index.jsx";
import { personMock } from "../../../test/__mocks__";

storiesOf("IdCopy", module).add("default", () => {
  const idxid = text("IdCopy text", personMock.idxid);

  return <IdCopy>{idxid}</IdCopy>;
});

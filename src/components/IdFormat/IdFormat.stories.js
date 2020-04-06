import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import { IdFormat } from "./index.jsx";
import { personMock } from "../../../test/__mocks__";

storiesOf("IdFormat", module).add("default", () => {
  const idxid = text("IdFormat text", personMock.idxid);

  return <IdFormat>{idxid}</IdFormat>;
});

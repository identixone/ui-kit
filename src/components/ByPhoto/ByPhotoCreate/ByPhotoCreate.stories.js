import React from "react";
import { storiesOf } from "@storybook/react";
import { object, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { ByPhotoCreate } from "./index.jsx";

storiesOf("ByPhotoCreate", module).add("default", () => {
  const createdPersonMock = {
    idxid: "5d8b4cca-6306-4aca-971a-3104749fdf03",
    age: 25,
    sex: 0,
    mood: "neutral",
    liveness: "passed",
    created: "2019-07-03T11:15:00.170576Z",
    source: "webcam",
    conf: "new",
  };
  const createErrorMock = {
    status: 404,
    data: {
      detail: "No person found in database",
    },
  };

  const hasDropped = boolean("has dropped", false);
  const isCreating = boolean("is creating", false);

  return (
    <ByPhotoCreate
      createdPerson={object("CreatedPerson", createdPersonMock)}
      createError={object("CreateError", createErrorMock)}
      clearResult={action("clear result")}
      fetchEntries={action("fetch entries")}
      onUploadEnd={action("component did fetch")}
      onUpload={action("handle upload file")}
      hasDropped={hasDropped}
      isCreating={isCreating}
    />
  );
});

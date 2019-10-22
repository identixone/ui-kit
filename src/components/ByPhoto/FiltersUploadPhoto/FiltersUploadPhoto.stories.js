import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { FiltersUploadPhoto } from "./index.jsx";

storiesOf("FiltersUploadPhoto", module).add("default", () => {
  const isLockDrop = boolean("is lock drop", false);
  const isLockUpload = boolean("is lock upload", false);

  return (
    <FiltersUploadPhoto
      render={() => <div>some content</div>}
      onUpload={action("upload file")}
      isLockDrop={isLockDrop}
      isLockUpload={isLockUpload}
    />
  );
});

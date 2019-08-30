import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";

import { LoginForm } from "./index.jsx";

storiesOf("Login Form", module).add("default", () => {
  const isLogging = boolean("Is Logging", false);

  return (
    <LoginForm login={action("login")} isLogging={isLogging} authError={null} />
  );
});

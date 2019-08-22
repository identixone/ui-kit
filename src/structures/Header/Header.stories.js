import React from "react";
import { storiesOf } from "@storybook/react";
import Header, { HeaderTopMenu, HeaderAppMenu } from "./index.jsx";

storiesOf("Header", module).add("default", () => <Header>Hello Button</Header>);

import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import { withProvider } from "./Provider";
import StoryRouter from "storybook-react-router";

function loadStories() {
  const req = require.context("../src", true, /\.stories\.js$/);
  req.keys().forEach((filename) => req(filename));
}

addDecorator(withKnobs);
addDecorator(withProvider);
addDecorator(StoryRouter());

configure(loadStories, module);

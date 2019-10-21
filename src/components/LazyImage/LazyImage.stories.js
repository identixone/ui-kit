import React from "react";
import styled from "styled-components";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { LazyImage } from "./index.jsx";

const StyledLazyImage = styled(LazyImage)`
  width: 200px;
  height: 200px;
`;

storiesOf("Lazy Image", module).add("default", () => {
  return (
    <StyledLazyImage onLoad={action("image loaded")}>
      <img src="https://source.unsplash.com/random/1800x1800" />
    </StyledLazyImage>
  );
});

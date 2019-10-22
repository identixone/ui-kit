import React from "react";
import styled from "styled-components";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { LazyImage } from "./index.jsx";

const StyledLazyImage = styled(LazyImage)`
  width: 200px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
  }
`;

storiesOf("Lazy Image", module)
  .add("Image as children", () => {
    return (
      <StyledLazyImage onLoad={action("image loaded")}>
        <img src="https://source.unsplash.com/random/1800x1800" />
      </StyledLazyImage>
    );
  })
  .add("Image as src prop", () => {
    return (
      <StyledLazyImage
        onLoad={action("image loaded")}
        src="https://source.unsplash.com/random/2800x2800"
      />
    );
  });

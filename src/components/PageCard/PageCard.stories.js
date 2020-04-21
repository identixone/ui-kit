import React from "react";
import styled from "styled-components";

import { storiesOf } from "@storybook/react";

import { PageCard } from "./index.jsx";

import { Button } from "../Button";
import { ArrowLeft, Check } from "../icons";

const StyledPageCard = styled(PageCard)`
  height: 400px;
`;

storiesOf("Page card", module).add("default", () => {
  return (
    <StyledPageCard
      buttons={
        <>
          <Button fit="square" size="large" theme="dark">
            <ArrowLeft size="16" />
          </Button>
          <Button fit="square" size="large" theme="light">
            <Check size="14" />
          </Button>
        </>
      }
    />
  );
});

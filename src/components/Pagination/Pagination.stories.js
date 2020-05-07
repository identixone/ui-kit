import React, { useState } from "react";
import styled from "styled-components";

import { storiesOf } from "@storybook/react";
import { number } from "@storybook/addon-knobs";

import { Pagination } from "./index";

const StyledWrapper = styled.div`
  width: 500px;
`;

storiesOf("Navigation|Pagination", module).add("default", () => {
  const totalCount = number("total count", 1000);
  const limit = number("limit", 20);

  function ComponentWrapper() {
    const [offset, setOffset] = useState(0);

    return (
      <StyledWrapper>
        <Pagination
          totalCount={totalCount}
          offset={offset}
          limit={limit}
          onChange={({ offset }) => setOffset(offset)}
        />
      </StyledWrapper>
    );
  }

  return <ComponentWrapper />;
});

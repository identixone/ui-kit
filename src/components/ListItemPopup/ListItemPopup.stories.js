import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import { ListItemPopup } from "./index.jsx";

import styled from "styled-components";

const StyledContentExample = styled.div`
  text-align: center;
  width: 60%;
  margin: auto;
`;

storiesOf("ListItemPopup", module).add("default", () => {
  const contentExample = text(
    "Content example",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget. Tellus integer feugiat scelerisque varius. Mattis molestie a iaculis at. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Purus sit amet volutpat consequat mauris nunc congue nisi vitae. Dictumst quisque sagittis purus sit amet volutpat consequat. Sapien faucibus et molestie ac."
  );

  return (
    <ListItemPopup
      trigger={({ ref, openPortal }) => (
        <button ref={ref} onClick={openPortal}>
          open
        </button>
      )}
    >
      {({ closePortal }) => (
        <React.Fragment>
          <button onClick={closePortal}>close</button>
          <StyledContentExample>{contentExample}</StyledContentExample>
        </React.Fragment>
      )}
    </ListItemPopup>
  );
});

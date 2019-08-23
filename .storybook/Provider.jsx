import React from "react";

import { GloalStyles } from "../src/components";

const ProviderWrapper = ({ children }) => (
  <React.Fragment>
    <GloalStyles />
    {children}
  </React.Fragment>
);

export const withProvider = story => (
  <ProviderWrapper>{story()}</ProviderWrapper>
);

export default ProviderWrapper;

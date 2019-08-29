import React from "react";

import { GloalStyles } from "../src/components";

const ProviderWrapper = ({ children }) => (
  <div style={{ padding: "0 15px" }}>
    <GloalStyles />
    {children}
  </div>
);

export const withProvider = story => (
  <ProviderWrapper>{story()}</ProviderWrapper>
);

export default ProviderWrapper;

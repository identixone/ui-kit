import React from "react";

import { GloalStyles, I18nProvider } from "../src/components";

const ProviderWrapper = ({ children }) => (
  <I18nProvider>
    <div style={{ padding: "0 15px", width: 940 }}>
      <GloalStyles />
      {children}
    </div>
  </I18nProvider>
);

export const withProvider = story => (
  <ProviderWrapper>{story()}</ProviderWrapper>
);

export default ProviderWrapper;

import React from "react";

import { GloalStyles, I18nProvider } from "../src/components";
import { Normalize } from "styled-normalize";

const ProviderWrapper = ({ children }) => (
  <I18nProvider>
    <div style={{ padding: 16, maxWidth: 940 }}>
      <Normalize />
      {children}
    </div>
  </I18nProvider>
);

export const withProvider = story => (
  <ProviderWrapper>{story()}</ProviderWrapper>
);

export default ProviderWrapper;

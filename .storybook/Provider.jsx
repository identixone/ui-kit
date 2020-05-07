import React from "react";

import { GlobalStyles, I18nProvider } from "../src/components";
import { Normalize } from "styled-normalize";

const ProviderWrapper = ({ children }) => (
  <I18nProvider>
    <div style={{ padding: 16, maxWidth: 940 }}>
      <Normalize />
      <GlobalStyles />
      {children}
    </div>
  </I18nProvider>
);

export const withProvider = (story) => (
  <ProviderWrapper>{story()}</ProviderWrapper>
);

export default ProviderWrapper;

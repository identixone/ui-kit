import React from "react";
import PropTypes from "prop-types";

import { render as RTLRender } from "@testing-library/react";

import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
i18n.init({
  fallbackLng: "cimode",
  debug: false,
  saveMissing: false,

  interpolation: {
    escapeValue: false,
  },

  react: {
    wait: true,
    nsMode: "fallback",
  },
});

const Wrapper = ({ children }) => {
  return <section id="app-container">{children}</section>;
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
};

const render = (ui, options) => RTLRender(ui, { wrapper: Wrapper, ...options });

const renderWithProviders = (ui, options) => {
  const rendered = render(
    <React.Suspense fallback={<div>Loading translations...</div>}>
      <I18nextProvider i18n={i18n}>{ui}</I18nextProvider>
    </React.Suspense>,
    options
  );

  return {
    ...rendered,
    rerender: (ui, options) =>
      renderWithProviders(ui, {
        container: rendered.container,
        ...options,
      }),
  };
};

export { render, renderWithProviders };

import React from "react";
import PropTypes from "prop-types";
import { render as RTLRender } from "@testing-library/react";

import { Router } from "react-router-dom";

const Wrapper = ({ children }) => {
  return <section id="app-container">{children}</section>;
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
};

const render = (ui, options) => RTLRender(ui, { wrapper: Wrapper, ...options });

const renderWithProviders = (ui, options) => {
  const rendered = render(<Router history={history}>{ui}</Router>, options);

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

import React from "react";
import PropTypes from "prop-types";

import { ErrorBoundary } from "../../components/ErrorBoundary";

import { get } from "lodash-es";

import { Redirect } from "react-router-dom";

function RedirectToError({ error }) {
  return (
    <Redirect
      to={{
        pathname: "/error",
        state: {
          error: {
            message: get(error, "error.message", "Unknown error"),
            stack: get(error, "error.stack", "No stack for you, sir!"),
          },
        },
      }}
    />
  );
}

RedirectToError.propTypes = {
  error: PropTypes.object.isRequired,
};

export const withErrorPageBoundary = (Component) => {
  const WithErrorPageBoundary = ({ onError, ...restProps }) => {
    return (
      <ErrorBoundary ErrorComponent={RedirectToError} onError={onError}>
        <Component {...restProps} />
      </ErrorBoundary>
    );
  };

  WithErrorPageBoundary.propTypes = {
    onError: PropTypes.func.isRequired,
  };

  return WithErrorPageBoundary;
};

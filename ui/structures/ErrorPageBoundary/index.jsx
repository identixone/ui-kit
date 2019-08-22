import React from "react";
import PropTypes from "prop-types";
import ErrorBoundary from "../../components/ErrorBoundary";

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

export const withErrorPageBoundary = Component => {
  const WithErrorPageBoundary = props => {
    return (
      <ErrorBoundary ErrorComponent={RedirectToError}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };

  return WithErrorPageBoundary;
};

import React from "react";
import PropTypes from "prop-types";

import * as Sentry from "@sentry/browser";

const { DEBUG } = process.env;

export class ErrorBoundary extends React.Component {
  static propTypes = {
    ErrorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  };

  state = { hasError: false, error: null, sentryEventId: null };

  componentDidCatch(error, info) {
    this.setState(
      {
        hasError: true,
        error: {
          error,
          info,
        },
      },
      () => {
        if (!DEBUG) {
          Sentry.withScope(scope => {
            scope.setExtras(info);
            const sentryEventId = Sentry.captureException(error);
            this.setState({ sentryEventId });
          });
        } else {
          console.log({ error, info });
        }
      }
    );
  }

  render() {
    const { ErrorComponent, children } = this.props;
    const { hasError, error } = this.state;

    return hasError ? <ErrorComponent error={error} /> : children;
  }
}

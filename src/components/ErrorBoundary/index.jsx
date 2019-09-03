import React from "react";
import PropTypes from "prop-types";

import { noop } from "lodash-es";

export class ErrorBoundary extends React.Component {
  static propTypes = {
    ErrorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
    onError: PropTypes.func,
  };

  static defaultProps = {
    onError: noop,
  };

  state = { error: null };

  componentDidCatch(error, info) {
    this.setState(
      {
        error: {
          error,
          info,
        },
      },
      () => {
        this.props.onError(this.state.error);
      }
    );
  }

  render() {
    const { ErrorComponent, children } = this.props;
    const { error } = this.state;

    return error ? <ErrorComponent error={error} /> : children;
  }
}

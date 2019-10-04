import React from "react";
import PropTypes from "prop-types";

import { Value } from "./Value";

export function ValueSpan(props) {
  return (
    <span className={props.className}>
      <Value {...props} />
    </span>
  );
}

ValueSpan.propTypes = {
  className: PropTypes.string,
};

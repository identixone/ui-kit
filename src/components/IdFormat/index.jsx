import React from "react";
import PropTypes from "prop-types";

import { Value } from "../Value";

const getShortId = id => id.split("-")[4];

export function IdFormat({ children }) {
  return <Value>{children ? getShortId(children) : null}</Value>;
}

IdFormat.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
};

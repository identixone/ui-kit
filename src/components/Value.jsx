import PropTypes from "prop-types";

import { isNotEmpty } from "../utils/helpers";

export function Value({ children, defaultValue, isZeroEmpty }) {
  return isNotEmpty(children, isZeroEmpty) ? children : defaultValue;
}

Value.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
  defaultValue: PropTypes.any,
  isZeroEmpty: PropTypes.bool,
};

Value.defaultProps = {
  defaultValue: "—",
  isZeroEmpty: false,
};

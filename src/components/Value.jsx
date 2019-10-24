import PropTypes from "prop-types";

import { isNotEmpty } from "../utils/helpers";

export function Value({ children, defaultValue, isZeroEmpty, value }) {
  const valueToCheck = value || children;

  return isNotEmpty(valueToCheck, isZeroEmpty) ? children : defaultValue;
}

Value.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
  defaultValue: PropTypes.any,
  isZeroEmpty: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Value.defaultProps = {
  defaultValue: "—",
  isZeroEmpty: false,
};

import PropTypes from "prop-types";
import { isNotEmpty } from "../../utils/helpers.js";

Value.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
  defaultValue: PropTypes.any,
};

Value.defaultProps = {
  defaultValue: "-",
};

export default function Value(props) {
  const { children, defaultValue } = props;

  return isNotEmpty(children) && children !== 0 && children !== ""
    ? children
    : defaultValue;
}

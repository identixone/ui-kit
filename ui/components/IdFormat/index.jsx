import PropTypes from "prop-types";

const getShortId = id => id.split("-")[4];

function IdFormat({ id, defaultValue }) {
  return id ? getShortId(id) : defaultValue;
}

IdFormat.propTypes = {
  id: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
};

IdFormat.defaultProps = {
  id: "",
  defaultValue: "-",
};

export default IdFormat;

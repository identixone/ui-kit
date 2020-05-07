import React from "react";
import PropTypes from "prop-types";

function Check({ size, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 10 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
        d="M9.34203 0.94405C9.71037 1.3304 9.71032 1.93795 9.34191 2.32424L5.32597 6.53515L3.76797 8.16894L2.20996 6.53515L2.21861 6.52609L0.650988 4.86448C0.286039 4.47765 0.287701 3.87284 0.654768 3.48802L0.830698 3.30359C1.22623 2.88892 1.88863 2.8908 2.2818 3.3077L3.77662 4.89271L7.71821 0.75905C8.11224 0.345818 8.77171 0.345844 9.16571 0.75911L9.34203 0.94405Z"
      />
    </svg>
  );
}

Check.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Check.defaultProps = {
  size: 10,
};

export default Check;

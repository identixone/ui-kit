import React from "react";
import PropTypes from "prop-types";

function ArrowRight({ size, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.20996 6.60203V5.39235C2.20996 5.19276 2.37327 5.02945 2.57286 5.02945H6.08093V3.00324C6.08093 2.67965 6.47105 2.51937 6.70089 2.74618L9.69484 5.74013C9.83698 5.88227 9.83698 6.11211 9.69484 6.25425L6.70089 9.2482C6.47105 9.47804 6.08093 9.31473 6.08093 8.99114V6.96493H2.57286C2.37327 6.96493 2.20996 6.80163 2.20996 6.60203Z"
        fill="currentColor"
      />
    </svg>
  );
}

ArrowRight.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

ArrowRight.defaultProps = {
  size: 12,
};

export default ArrowRight;

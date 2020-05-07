import React from "react";
import PropTypes from "prop-types";

function TimesDeleteBold({ size, className }) {
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
        d="M7.89545 6L10.7384 3.1571C11.0872 2.80824 11.0872 2.24261 10.7384 1.89347L10.1065 1.26165C9.75767 0.912784 9.19205 0.912784 8.8429 1.26165L6 4.10455L3.1571 1.26165C2.80824 0.912784 2.24261 0.912784 1.89347 1.26165L1.26165 1.89347C0.912784 2.24233 0.912784 2.80795 1.26165 3.1571L4.10455 6L1.26165 8.8429C0.912784 9.19176 0.912784 9.75739 1.26165 10.1065L1.89347 10.7384C2.24233 11.0872 2.80824 11.0872 3.1571 10.7384L6 7.89545L8.8429 10.7384C9.19176 11.0872 9.75767 11.0872 10.1065 10.7384L10.7384 10.1065C11.0872 9.75767 11.0872 9.19205 10.7384 8.8429L7.89545 6Z"
        fill="currentColor"
      />
    </svg>
  );
}

TimesDeleteBold.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

TimesDeleteBold.defaultProps = {
  size: 10,
};

export default TimesDeleteBold;

import React from "react";
import PropTypes from "prop-types";

function TimesDelete({ size, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.47885 10.182C9.67411 10.3772 9.99069 10.3772 10.186 10.182C10.3812 9.98672 10.3812 9.67014 10.186 9.47487L7.71108 7L10.186 4.52513C10.3812 4.32986 10.3812 4.01328 10.186 3.81802C9.99069 3.62276 9.67411 3.62276 9.47885 3.81802L7.00398 6.29289L4.5291 3.81802C4.33384 3.62276 4.01726 3.62276 3.822 3.81802C3.62673 4.01328 3.62673 4.32986 3.822 4.52513L6.29687 7L3.822 9.47487C3.62673 9.67014 3.62673 9.98672 3.822 10.182C4.01726 10.3772 4.33384 10.3772 4.5291 10.182L7.00398 7.70711L9.47885 10.182Z"
        fill="currentColor"
      />
    </svg>
  );
}

TimesDelete.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

TimesDelete.defaultProps = {
  size: 10,
};

export default TimesDelete;

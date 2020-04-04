import React from "react";
import PropTypes from "prop-types";

function InfoCircleColor({ size, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0.375C5.58014 0.375 0.375 5.58202 0.375 12C0.375 18.4217 5.58014 23.625 12 23.625C18.4199 23.625 23.625 18.4217 23.625 12C23.625 5.58202 18.4199 0.375 12 0.375Z"
        fill="#E4E9EB"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5.53125C13.0873 5.53125 13.9688 6.41269 13.9688 7.5C13.9688 8.58731 13.0873 9.46875 12 9.46875C10.9127 9.46875 10.0312 8.58731 10.0312 7.5C10.0312 6.41269 10.9127 5.53125 12 5.53125ZM14.625 17.4375C14.625 17.7481 14.3731 18 14.0625 18H9.9375C9.62686 18 9.375 17.7481 9.375 17.4375V16.3125C9.375 16.0019 9.62686 15.75 9.9375 15.75H10.5V14.25V12.75H9.9375C9.62686 12.75 9.375 12.4981 9.375 12.1875V11.0625C9.375 10.7519 9.62686 10.5 9.9375 10.5H12.9375C13.2481 10.5 13.5 10.7519 13.5 11.0625V13.4062V15.75H14.0625C14.3731 15.75 14.625 16.0019 14.625 16.3125V17.4375Z"
        fill="#3B4B5A"
      />
    </svg>
  );
}

InfoCircleColor.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

InfoCircleColor.defaultProps = {
  size: 10,
};

export default InfoCircleColor;

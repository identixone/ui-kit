import React from "react";
import PropTypes from "prop-types";

function QRcode({ size, className }) {
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
        d="M3.6875 10.8125H10.8125V3.6875H3.6875V10.8125ZM6.0625 6.0625H8.4375V8.4375H6.0625V6.0625ZM13.1875 3.6875V10.8125H20.3125V3.6875H13.1875ZM17.9375 8.4375H15.5625V6.0625H17.9375V8.4375ZM3.6875 20.3125H10.8125V13.1875H3.6875V20.3125ZM6.0625 15.5625H8.4375V17.9375H6.0625V15.5625ZM19.125 13.1875H20.3125V17.9375H16.75V16.75H15.5625V20.3125H13.1875V13.1875H16.75V14.375H19.125V13.1875ZM19.125 19.125H20.3125V20.3125H19.125V19.125ZM16.75 19.125H17.9375V20.3125H16.75V19.125Z"
        fill="currentColor"
      />
    </svg>
  );
}

QRcode.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

QRcode.defaultProps = {
  size: 10,
};

export default QRcode;

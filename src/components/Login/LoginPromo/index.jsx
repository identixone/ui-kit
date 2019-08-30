import React from "react";
import PropTypes from "prop-types";

import StyledLoginPromo from "./StyledLoginPromo";
import LoginPromoImg from "./LoginPromoImg";

export function LoginPromo({ promoImage }) {
  return (
    <StyledLoginPromo>
      <LoginPromoImg src={promoImage} />
    </StyledLoginPromo>
  );
}

LoginPromo.propTypes = {
  promoImage: PropTypes.string.isRequired,
};

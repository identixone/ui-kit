import React from "react";
import PropTypes from "prop-types";

import StyledAdditionalButton from "./StyledAdditionalButton";
import colors from "../../themes/colors";

export default function AdditionalButton({
  onClick,
  deleteColor,
  size,
  isDisabled,
  children,
  testId,
}) {
  return (
    <StyledAdditionalButton
      data-testid={testId}
      deleteColor={deleteColor}
      onClick={onClick}
      size={size}
      disabled={isDisabled}
    >
      {children}
    </StyledAdditionalButton>
  );
}

AdditionalButton.defaultProps = {
  deleteColor: colors.brownSimple,
};

AdditionalButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  size: PropTypes.string,
  testId: PropTypes.string,
  isDisabled: PropTypes.bool,
  deleteColor: PropTypes.string,
};

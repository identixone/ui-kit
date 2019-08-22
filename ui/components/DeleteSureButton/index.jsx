import React from "react";
import PropTypes from "prop-types";

import StyledDeleteSureButton from "./StyledDeleteSureButton";
import colors from "../../../ui/assets/common/themes/colors.js";

import DeleteSure from "../DeleteSure";

export default function DeleteSureButton({
  onDelete,
  deleteColor,
  size,
  isDisabled,
  className,
}) {
  return (
    <DeleteSure onDelete={onDelete}>
      {({ isSure, handleClick, handleMouseLeave }) => (
        <StyledDeleteSureButton
          className={className}
          deleteColor={deleteColor}
          isSure={isSure}
          onClick={handleClick}
          onMouseLeave={handleMouseLeave}
          size={size}
          disabled={isDisabled}
          data-testid="delete-button"
        >
          {isSure ? "Sure?" : "Delete"}
        </StyledDeleteSureButton>
      )}
    </DeleteSure>
  );
}

DeleteSureButton.defaultProps = {
  deleteColor: colors.brownSimple,
};

DeleteSureButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
  size: PropTypes.string,
  isDisabled: PropTypes.bool,
  deleteColor: PropTypes.string,
  className: PropTypes.string,
};

import React from "react";
import PropTypes from "prop-types";

import { FormCheckbox } from "../../form";

import { StyledCardSmallCheckbox } from "./StyledCardSmallCheckbox";

function CardSmallCheckbox({ name, onChange, checked, isHidden }) {
  return (
    <StyledCardSmallCheckbox
      htmlFor={name}
      onClick={(e) => {
        e.stopPropagation();
      }}
      isHidden={isHidden}
    >
      <FormCheckbox name={name} onChange={onChange} checked={checked} />
    </StyledCardSmallCheckbox>
  );
}

CardSmallCheckbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  isHidden: PropTypes.bool.isRequired,
};

export { CardSmallCheckbox };

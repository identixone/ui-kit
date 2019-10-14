import React from "react";
import PropTypes from "prop-types";

import { FormCheckbox } from "../../../form";

import StyledPersonsListPersonCheckbox from "./StyledPersonsListPersonCheckbox";

function PersonsListPersonCheckbox({ name, onChange, value, isHidden }) {
  const handleLabelClick = e => {
    e.stopPropagation();
  };

  return (
    <StyledPersonsListPersonCheckbox
      htmlFor={name}
      onClick={handleLabelClick}
      isHidden={isHidden}
    >
      <FormCheckbox
        name={name}
        onChange={onChange}
        value={value}
        checkboxTheme="dark"
      />
    </StyledPersonsListPersonCheckbox>
  );
}

PersonsListPersonCheckbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  isHidden: PropTypes.bool,
};

export default PersonsListPersonCheckbox;

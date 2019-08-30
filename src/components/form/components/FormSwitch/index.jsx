import React from "react";
import PropTypes from "prop-types";

import StyledFormSwitch from "./StyledFormSwitch";
import FormSwitchLabel from "./FormSwitchLabel";
import FormSwitchCheckbox from "./FormSwitchCheckbox";

export function FormSwitch({ onChange, name, value, size, theme }) {
  return (
    <StyledFormSwitch size={size}>
      <FormSwitchCheckbox
        id={name}
        type="checkbox"
        name={name}
        checked={value}
        onChange={onChange}
        size={size}
        data-testid={name}
      />
      <FormSwitchLabel
        htmlFor={name ? name : undefined}
        size={size}
        checked={value}
        theme={theme}
      />
    </StyledFormSwitch>
  );
}

FormSwitch.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["s", "m"]),
  theme: PropTypes.oneOf(["blue", "dark-gray"]),
};

FormSwitch.defaultProps = {
  size: "m",
  theme: "blue",
};
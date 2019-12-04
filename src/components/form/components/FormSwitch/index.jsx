import React from "react";
import PropTypes from "prop-types";

import { StyledFormSwitch } from "./StyledFormSwitch";
import FormSwitchLabel from "./FormSwitchLabel";
import FormSwitchCheckbox from "./FormSwitchCheckbox";

function FormSwitch({ onChange, name, checked, size, theme, className }) {
  return (
    <StyledFormSwitch size={size} className={className}>
      <FormSwitchCheckbox
        id={name}
        type="checkbox"
        name={name}
        value={checked}
        checked={checked}
        onChange={onChange}
        size={size}
        data-testid={name}
      />
      <FormSwitchLabel
        htmlFor={name ? name : undefined}
        size={size}
        checked={checked}
        theme={theme}
      />
    </StyledFormSwitch>
  );
}

FormSwitch.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["s", "m"]),
  theme: PropTypes.oneOf(["blue", "dark-gray"]),
  className: PropTypes.string,
};

FormSwitch.defaultProps = {
  size: "m",
  theme: "blue",
};

export { FormSwitch, StyledFormSwitch };

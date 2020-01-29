import React from "react";
import PropTypes from "prop-types";

import { StyledFormSwitch } from "./StyledFormSwitch";
import { FormSwitchLabel } from "./FormSwitchLabel";
import { FormSwitchCheckbox } from "./FormSwitchCheckbox";

function FormSwitch({
  name,
  size,
  theme,
  checked,
  onChange,
  className,
  "data-testid": testId,
}) {
  if (name) {
    testId = name;
  }

  return (
    <StyledFormSwitch
      htmlFor={name ? name : undefined}
      size={size}
      className={className}
      data-testid={testId}
    >
      <FormSwitchCheckbox
        id={name}
        name={name}
        value={checked}
        checked={checked}
        onChange={onChange}
        size={size}
        data-testid={testId + "-checkbox"}
      />
      <FormSwitchLabel
        size={size}
        checked={checked}
        theme={theme}
        data-testid={testId + "-label"}
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
  "data-testid": PropTypes.string,
};

FormSwitch.defaultProps = {
  size: "m",
  theme: "blue",
  "data-testid": "form-switch",
};

export { FormSwitch, StyledFormSwitch };

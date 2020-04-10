import React from "react";
import PropTypes from "prop-types";

import { StyledFormSwitch } from "./StyledFormSwitch";
import { FormSwitchLabel } from "./FormSwitchLabel";
import { FormSwitchCheckbox } from "./FormSwitchCheckbox";

import { getTestId } from "../../utils";

function FormSwitch({
  name,
  size,
  checked,
  onChange,
  className,
  "data-testid": testId,
}) {
  testId = getTestId(name, testId);

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
  className: PropTypes.string,
  "data-testid": PropTypes.string,
};

FormSwitch.defaultProps = {
  size: "m",
};

export { FormSwitch, StyledFormSwitch, FormSwitchLabel };

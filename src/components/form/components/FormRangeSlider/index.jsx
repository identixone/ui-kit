import React from "react";
import PropTypes from "prop-types";

import { StyledFormRangeSlider } from "./StyledFormRangeSlider";
import { FormRangeSliderInner } from "./FormRangeSliderInner";

import { round } from "lodash";
import { getTestId } from "../../utils";

function formatter(decimals) {
  return {
    from: function (value) {
      return `${round(value, decimals)}`;
    },
    to: function (value) {
      return `${round(value, decimals)}`;
    },
  };
}

function FormRangeSlider(props) {
  const { from, to, minFrom, maxTo, width, onChange, className } = props;
  const testId = getTestId(props.name, props["data-testid"]);

  return (
    <StyledFormRangeSlider className={className} data-testid={testId}>
      <FormRangeSliderInner
        name={name}
        width={width}
        start={[from, to]}
        step={1}
        margin={1}
        connect={true}
        tooltips={[formatter(0), formatter(0)]}
        range={{
          min: minFrom,
          max: maxTo,
        }}
        onChange={(value) => {
          onChange(!value ? value : value.map(Number));
        }}
        data-testid={`${testId}-slider`}
      />
    </StyledFormRangeSlider>
  );
}

FormRangeSlider.propTypes = {
  from: PropTypes.number,
  to: PropTypes.number,
  minFrom: PropTypes.number,
  maxTo: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  name: PropTypes.string,
  "data-testid": PropTypes.string,
};

FormRangeSlider.defaultProps = {
  minFrom: 0,
  maxTo: 99,
  from: 0,
  to: 99,
};

export { FormRangeSlider, StyledFormRangeSlider };

import React from "react";
import PropTypes from "prop-types";

import { StyledFormRangeSlider } from "./StyledFormRangeSlider";
import { FormRangeSliderInner } from "./FormRangeSliderInner";
import { FormRangeSliderResetButton } from "./FormRangeSliderResetButton";
import { TimesCircle } from "../../../../assets/icons";

import { round } from "lodash";
import { getTestId } from "../../utils";

function formatter(decimals) {
  return {
    from: function(value) {
      return `${round(value, decimals)}`;
    },
    to: function(value) {
      return `${round(value, decimals)}`;
    },
  };
}

function FormRangeSlider({
  from,
  to,
  minFrom,
  maxTo,
  width,
  onChange,
  withClear,
  className,
  "data-testid": testId,
}) {
  testId = getTestId(name, testId);

  const isClearButtonHidden = Boolean(minFrom === from && maxTo === to);

  return (
    <StyledFormRangeSlider className={className} data-testid={testId}>
      <FormRangeSliderInner
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
        onChange={value => {
          onChange(!value ? value : value.map(Number));
        }}
        data-testid={`${testId}-slider`}
      />
      {withClear && (
        <FormRangeSliderResetButton
          onClick={() => {
            onChange([minFrom, maxTo]);
          }}
          isHidden={isClearButtonHidden}
          data-testid={`${testId}-clear`}
        >
          <TimesCircle size="22" />
        </FormRangeSliderResetButton>
      )}
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
  withClear: PropTypes.bool,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
};

FormRangeSlider.defaultProps = {
  minFrom: 0,
  maxTo: 99,
  from: 0,
  to: 99,
  withClear: false,
};

export { FormRangeSlider, StyledFormRangeSlider };

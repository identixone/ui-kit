import React, { Component } from "react";
import PropTypes from "prop-types";

import { StyledFormRangeSlider } from "./StyledFormRangeSlider";
import { StyledFormRangeSliderInner } from "./StyledFormRangeSliderInner";

import FormRangeSliderResetButton from "./FormRangeSliderResetButton";

import { round } from "lodash";

import { TimesCircle } from "../../../../assets/icons";

class FormRangeSlider extends Component {
  static propTypes = {
    from: PropTypes.number,
    to: PropTypes.number,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func.isRequired,
    withClear: PropTypes.bool,
    className: PropTypes.string,
  };

  static defaultProps = {
    from: 0,
    to: 99,
    withClear: false,
  };

  handleReset = () => {
    this.props.onChange([0, 99]);
  };

  render() {
    const { from, to, width, onChange, withClear, className } = this.props;
    const { defaultProps } = FormRangeSlider;

    const isClearButtonHidden =
      defaultProps.from === from && defaultProps.to === to;

    return (
      <StyledFormRangeSlider className={className}>
        <StyledFormRangeSliderInner
          width={width}
          start={[from, to]}
          step={1}
          margin={1}
          connect={true}
          tooltips={[formatter(0), formatter(0)]}
          range={{
            min: 0,
            max: 99,
          }}
          onChange={onChange}
        />
        {withClear && (
          <FormRangeSliderResetButton
            onClick={this.handleReset}
            isHidden={isClearButtonHidden}
          >
            <TimesCircle size="22" />
          </FormRangeSliderResetButton>
        )}
      </StyledFormRangeSlider>
    );
  }
}

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

export { FormRangeSlider, StyledFormRangeSlider };

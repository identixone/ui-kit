import React from "react";
import PropTypes from "prop-types";

import { useField, useFormikContext } from "formik";

import StyledFormField from "./StyledFormField";
import { FormLabel, FormLabelTitle } from "../FormLabel";

import { Tooltip } from "../../../Tooltip";
import { FormFieldIcon } from "./FormFieldIcon";
import FormFieldTag from "./FormFieldTag";
import FormFieldError from "./FormFieldError";

function FormField(props) {
  const {
    label,
    labelType,
    render,
    name,
    type,
    component,
    tip,
    direction,
    tag,
    showError,
    disabled,
    height,
    className,
    placeholder,
    valuePlaceholder,
  } = props;

  const [field, { touched, error }] = useField({ name, type });
  const { setFieldValue } = useFormikContext();

  const hasError = Boolean(touched && error);

  const onChange = (ev) => {
    if (ev.type) {
      field.onChange(ev);
    } else {
      setFieldValue(field.name, ev);
    }
  };

  const FormComponent = component;

  const formComponentProps = {
    ...field,
    hasError,
    onChange,
    disabled,
    placeholder,
    valuePlaceholder,
  };

  const getFormComponent = () => {
    return component ? (
      <FormComponent {...formComponentProps} />
    ) : render ? (
      render(formComponentProps)
    ) : (
      ""
    );
  };

  const getFormFieldTip = () => {
    return (
      tip && (
        <Tooltip title={tip}>
          <FormFieldIcon size={14} />
        </Tooltip>
      )
    );
  };

  const getFormFieldTag = () => {
    return tag && <FormFieldTag>{tag}</FormFieldTag>;
  };

  const getFormError = () => {
    return hasError && showError ? (
      <FormFieldError data-testid={`field-error-${name}`}>
        {error}
      </FormFieldError>
    ) : null;
  };

  return (
    <StyledFormField className={className}>
      {label ? (
        <React.Fragment>
          <FormLabel
            htmlFor={name ? name : undefined}
            direction={direction}
            labelType={labelType}
            disabled={disabled}
            height={height}
          >
            <FormLabelTitle>
              {label}
              {labelType === "bold" && ":"}
              {getFormFieldTip()}
              {getFormFieldTag()}
            </FormLabelTitle>
            {getFormComponent()}
          </FormLabel>
          {getFormError()}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {getFormFieldTip()}
          {getFormFieldTag()}
          {getFormComponent()}
          {getFormError()}
        </React.Fragment>
      )}
    </StyledFormField>
  );
}

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  labelType: PropTypes.oneOf(["bold", "normal"]),
  tip: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  direction: PropTypes.oneOf(["row", "column"]),
  render: PropTypes.func,
  component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.elementType,
  ]),
  showError: PropTypes.bool,
  disabled: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  /**
   * Разобраться, зачем эти пропсы
   */
  placeholder: PropTypes.string,
  valuePlaceholder: PropTypes.string,
  /**
   * Тип поля для формика
   */
  type: PropTypes.string,
};

FormField.defaultProps = {
  direction: "row",
  labelType: "normal",
  showError: true,
};

export { FormField, StyledFormField };

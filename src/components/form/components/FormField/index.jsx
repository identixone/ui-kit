import React from "react";
import PropTypes from "prop-types";

import { FastField, Field } from "formik";

import StyledFormField from "./StyledFormField";
import { FormLabel, FormLabelTitle } from "../FormLabel";

import { Tooltip } from "../../../Tooltip";
import FormFieldIcon from "./FormFieldIcon";
import FormFieldTag from "./FormFieldTag";
import FormFieldError from "./FormFieldError";

import { InfoCircle } from "../../../../assets/icons";

function FormField(props) {
  const {
    label,
    render,
    name,
    component,
    tip,
    direction,
    isFast,
    tag,
    showError,
    disabled,
    height,
    className,
    placeholder,
    valuePlaceholder,
  } = props;

  const FormikField = isFast ? FastField : Field;

  return (
    <FormikField
      name={name}
      render={({ field, form: { touched, errors, setFieldValue } }) => {
        const hasError = Boolean(touched[name] && errors[name]);

        const onChange = ev => {
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
                <FormFieldIcon>
                  <InfoCircle size="16" />
                </FormFieldIcon>
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
              {errors[name]}
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
                  disabled={disabled}
                  height={height}
                >
                  <FormLabelTitle>
                    {label}
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
      }}
    />
  );
}

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  tip: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  direction: PropTypes.oneOf(["row", "column"]),
  render: PropTypes.func,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  isFast: PropTypes.bool,
  showError: PropTypes.bool,
  disabled: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  /**
   * Разобраться, зачем эти пропсы
   */
  placeholder: PropTypes.string,
  valuePlaceholder: PropTypes.string,
};

FormField.defaultProps = {
  direction: "row",
  isFast: true,
  showError: true,
};

export { FormField, StyledFormField };

import React from "react";
import PropTypes from "prop-types";

import { useState, useEffect, useRef } from "react";
import { usePrevious } from "react-use";

import { object, string } from "yup";

import { StyledLoginForm } from "./StyledLoginForm";
import LoginFormForm from "./LoginFormForm";

import LoginFormLogo from "./LoginFormLogo";
import LoginFormTilte from "./LoginFormTitle";
import LoginFormFields from "./LoginFormFields";
import LoginFormButton from "./LoginFormButton";
import LoginFormError from "./LoginFormError";
import LoginFormInput from "./LoginFormInput";

import { FormField } from "../../form/components";

import { withFormik } from "formik";
import { isEmpty } from "lodash-es";

const ERROR_EMPTY_FIELDS = "Required fields are empty";

function LoginFormComponent({
  title,
  logoSrc,
  isLogging,
  authError,
  values,
  errors,
  setErrors,
  submitForm,
  resetForm,
  className,
  submitCount,
  "data-testid": testId,
}) {
  const [stateAuthError, setStateAuthError] = useState(null);
  const [authErrorResetTimerId, setAuthErrorResetTimerId] = useState(null);
  const usernameInputRef = useRef();
  const prevStateAuthError = usePrevious(stateAuthError);
  const prevValues = usePrevious(values);
  const prevIsLogging = usePrevious(isLogging);

  useEffect(() => {
    if (usernameInputRef.current) {
      usernameInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (authError) {
      setStateAuthError(authError);
    } else {
      if (
        prevStateAuthError !== ERROR_EMPTY_FIELDS &&
        !isEmpty(errors) &&
        !authErrorResetTimerId
      ) {
        setStateAuthError(ERROR_EMPTY_FIELDS);
      }

      if (stateAuthError && prevStateAuthError !== stateAuthError) {
        setAuthErrorResetTimerId(setTimeout(clearAuthError, 2000));
      }

      if (values !== prevValues) {
        setErrors({});
      }

      if (prevIsLogging && !isLogging) {
        resetForm();
        if (usernameInputRef.current) {
          usernameInputRef.current.focus();
        }
      }
    }
  }, [authError, errors, submitCount, stateAuthError]);

  function clearAuthError() {
    clearTimeout(authErrorResetTimerId);

    setStateAuthError(null);
    setAuthErrorResetTimerId(null);
  }

  function handleFormSubmit(ev) {
    ev.preventDefault();
    submitForm();
  }

  return (
    <StyledLoginForm className={className}>
      {logoSrc && <LoginFormLogo src={logoSrc} />}
      {title && <LoginFormTilte>{title}</LoginFormTilte>}
      <LoginFormForm onSubmit={handleFormSubmit} data-testid={testId}>
        <LoginFormFields>
          <FormField
            name="username"
            showError={false}
            render={(props) => (
              <LoginFormInput
                {...props}
                placeholder="USERNAME"
                ref={usernameInputRef}
              />
            )}
          />
          <FormField
            name="password"
            showError={false}
            render={(props) => (
              <LoginFormInput
                {...props}
                placeholder="PASSWORD"
                type="password"
              />
            )}
          />
          <LoginFormError data-testid="login-form-error">
            {stateAuthError}
          </LoginFormError>
        </LoginFormFields>
        <LoginFormButton type="submit">Login</LoginFormButton>
      </LoginFormForm>
    </StyledLoginForm>
  );
}

LoginFormComponent.propTypes = {
  title: PropTypes.string,
  logoSrc: PropTypes.string,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
  login: PropTypes.func.isRequired,
  isLogging: PropTypes.bool.isRequired,
  authError: PropTypes.object,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  setErrors: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitCount: PropTypes.number.isRequired,
};

LoginFormComponent.defaultProps = {
  "data-testid": "login-form",
};

const LoginForm = withFormik({
  mapPropsToValues: function () {
    return { username: "", password: "" };
  },
  validateOnBlur: false,
  validateOnChange: false,
  validationSchema: object({
    username: string().required(),
    password: string().required(),
  }),
  handleSubmit: function (values, { props }) {
    props.login(values);
  },
})(LoginFormComponent);

export { LoginForm, LoginFormComponent };

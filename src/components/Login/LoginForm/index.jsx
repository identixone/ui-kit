import React, { Component } from "react";
import PropTypes from "prop-types";

import { object, string } from "yup";

import LoginFormWrapper from "./LoginFormWrapper";
import StyledLoginForm from "./StyledLoginForm";

import LoginFormLogo from "./LoginFormLogo";
import LoginFormTilte from "./LoginFormTitle";
import LoginFormFields from "./LoginFormFields";
import LoginFormButton from "./LoginFormButton";
import LoginFormError from "./LoginFormError";
import LoginFormInput from "./LoginFormInput";

import { FormField } from "../../form/components";

import { withFormik } from "formik";

import { isEmpty } from "lodash-es";

export class LoginFormComponent extends Component {
  static propTypes = {
    logoSrc: PropTypes.string,
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

  usernameInputRef = React.createRef();

  state = {
    authError: null,
    authErrorResetTimerId: null,
  };

  componentDidMount() {
    if (this.usernameInputRef.current) {
      this.usernameInputRef.current.focus();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.authError && this.props.authError) {
      this.setAuthError(this.props.authError);
      return;
    }

    if (
      prevState.authError !== "Required fields are empty" &&
      !isEmpty(this.props.errors)
    ) {
      this.setAuthError("Required fields are empty");
    }

    if (prevState.authError !== this.state.authError && this.state.authError) {
      this.setState({
        authErrorResetTimerId: setTimeout(this.clearAuthError, 2000),
      });
    }

    if (this.props.values !== prevProps.values) {
      this.props.setErrors({});
    }

    if (prevProps.isLogging && !this.props.isLogging) {
      this.props.resetForm();
      if (this.usernameInputRef.current) {
        this.usernameInputRef.current.focus();
      }
    }
  }

  setAuthError(authError) {
    this.setState({
      authError,
    });
  }

  clearAuthError = () => {
    clearTimeout(this.state.authErrorResetTimerId);

    this.setState({ authError: null, authErrorResetTimerId: null });
  };

  handleFormSubmit = ev => {
    ev.preventDefault();
    this.props.submitForm();
  };

  render() {
    const { logoSrc } = this.props;

    return (
      <LoginFormWrapper>
        <LoginFormLogo src={logoSrc} />
        <LoginFormTilte>IO:Cloud - Login page</LoginFormTilte>
        <StyledLoginForm
          onSubmit={this.handleFormSubmit}
          data-testid="login-form"
        >
          <LoginFormFields>
            <FormField
              name="username"
              showError={false}
              render={props => (
                <LoginFormInput
                  {...props}
                  placeholder="USERNAME"
                  ref={this.usernameInputRef}
                />
              )}
            />
            <FormField
              name="password"
              showError={false}
              render={props => (
                <LoginFormInput
                  {...props}
                  placeholder="PASSWORD"
                  type="password"
                />
              )}
            />
            <LoginFormError data-testid="login-form-error">
              {this.state.authError}
            </LoginFormError>
          </LoginFormFields>
          <LoginFormButton type="submit">Login</LoginFormButton>
        </StyledLoginForm>
      </LoginFormWrapper>
    );
  }
}

export const LoginForm = withFormik({
  mapPropsToValues: function() {
    return { username: "", password: "" };
  },
  validateOnBlur: false,
  validateOnChange: false,
  validationSchema: object({
    username: string().required(),
    password: string().required(),
  }),
  handleSubmit: function(values, { props }) {
    props.login(values);
  },
})(LoginFormComponent);

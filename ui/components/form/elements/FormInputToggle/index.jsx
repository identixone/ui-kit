import React from "react";
import PropTypes from "prop-types";

import { FormInput } from "../FormInput";

import StyledInputToggle from "./StyledInputToggle";
import InputToggleButton from "./InputToggleButton";

export class FormInputToggle extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(["text", "password", "email", "number"]),
    initialOpen: PropTypes.bool,
    width: PropTypes.string,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    type: "text",
    initialOpen: false,
  };

  state = {
    isOpen: this.props.initialOpen,
  };

  togglerRef = React.createRef();
  inputRef = React.createRef();

  componentDidMount() {
    window.addEventListener("click", this.handleWindowClick);
  }

  componentDidUpdate(_, prevState) {
    if (this.state.isOpen && !prevState.isOpen && this.inputRef.current) {
      this.inputRef.current.select();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleWindowClick);
  }

  handleWindowClick = ev => {
    if (!ev.target.closest(`[data-toggle="${this.props.name}"]`)) {
      this.setState({ isOpen: false });
    } else {
      /**
       * Сделано для того, чтобы, когда в тексте кнопки ссылка
       * браузер не пытался по ней перейти
       */
      ev.preventDefault();

      this.setState({ isOpen: true });
    }
  };

  handleInputBlur = ev => {
    this.setState({ isOpen: false });
    this.props.onBlur(ev);
  };

  render() {
    const {
      onChange,
      name,
      value,
      placeholder,
      type,
      width,
      disabled,
    } = this.props;
    const { isOpen } = this.state;

    return (
      <StyledInputToggle
        width={width}
        ref={this.togglerRef}
        data-toggle={name}
        hasValue={value && value !== 0}
        disabled={disabled}
      >
        {isOpen ? (
          <FormInput
            id={name}
            name={name}
            type={type}
            placeholder={placeholder ? placeholder : undefined}
            onChange={onChange}
            onBlur={this.handleInputBlur}
            value={value}
            innerRef={this.inputRef}
            disabled={disabled}
            data-testid={name}
          />
        ) : (
          <InputToggleButton
            hasValue={value && value !== 0}
            isDisabled={disabled}
            data-testid={name}
          >
            {value}
          </InputToggleButton>
        )}
      </StyledInputToggle>
    );
  }
}

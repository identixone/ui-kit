import React, { Component } from "react";
import PropTypes from "prop-types";

import Downshift from "downshift";

import StyledFormDropdown from "./StyledFormDropdown";
import FormDropdownControl from "./FormDropdownControl";

import FormDropdownMenu from "./FormDropdownMenu";
import FormDropdownOption from "./FormDropdownOption";

import FormDropdownInputWrapper from "./FormDropdownInputWrapper";
import FormDropdownInput from "./FormDropdownInput";

import { searchInList } from "../../../../utils/helpers";
import { identity, property as prop, isEqual, get } from "lodash-es";

class FormDropdown extends Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.object,
    withSearch: PropTypes.bool,
    disabled: PropTypes.bool,
    options: PropTypes.array,
    onStateChange: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    onInputChange: PropTypes.func,
    listRef: PropTypes.object,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    placeholder: PropTypes.string,
    renderItem: PropTypes.string.isRequired,
  };

  static defaultProps = {
    withSearch: false,
    disabled: false,
    onStateChange: identity,
    onChange: identity,
    onInputChange: identity,
    placeholder: "",
    renderItem: prop("label"),
    options: [],
  };

  constructor(props) {
    super(props);

    const value =
      typeof this.props.value !== "object"
        ? this.props.options.find(option => option.value === this.props.value)
        : this.props.value;

    this.state = {
      inputValue: "",

      selectedValue: value,
      // Нужно для того, чтобы в контроле показывать
      // хайлатед по стрелкам элемент в дропдауне с поиском
      preselectedItem: value,
      /**
       * Нужно сохранить значние для того,
       * чтобы отобразить его в селекте, даже если
       * его нет в options
       */
      rawValue: this.props.value,
    };

    this.inputRef = React.createRef();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value && nextProps.value !== prevState.rawValue) {
      if (typeof nextProps.value !== "object") {
        const newValue = nextProps.options.find(
          option => option.value === nextProps.value
        );

        return {
          selectedValue: newValue,
          preselectedItem: newValue,
          rawValue: nextProps.value,
        };
      } else {
        return {
          selectedValue: nextProps.value,
          preselectedItem: nextProps.value,
          rawValue: nextProps.value,
        };
      }
    }

    return null;
  }

  handleStateChange = (changes, helpers) => {
    const { options } = this.props;

    if (changes.isOpen && this.inputRef.current) {
      this.inputRef.current.focus();
    }

    let preselectedItem = this.state.preselectedItem;

    if (
      changes.type === Downshift.stateChangeTypes.keyDownArrowUp ||
      changes.type === Downshift.stateChangeTypes.keyDownArrowDown
    ) {
      preselectedItem = options[changes.highlightedIndex];
    }

    if (changes.selectedItem !== undefined) {
      preselectedItem = changes.selectedItem;
    }

    this.setState(
      { preselectedItem },
      () =>
        this.props.onStateChange && this.props.onStateChange(changes, helpers)
    );
  };

  stateReducer = (state, changes) => {
    const { options, withSearch } = this.props;

    if (state.isOpen && changes.isOpen === false) {
      this.setState({ inputValue: "" });
    }

    if (changes.type === Downshift.stateChangeTypes.changeInput) {
      this.setState({ inputValue: changes.inputValue });
    }

    switch (changes.type) {
      case Downshift.stateChangeTypes.controlledPropUpdatedSelectedItem:
        return {
          ...changes,
          highlightedIndex: this.highlightedIndex,
        };
      case Downshift.stateChangeTypes.keyDownArrowUp:
      case Downshift.stateChangeTypes.keyDownArrowDown:
        return {
          ...changes,
          selectedItem:
            !withSearch && changes.highlightedIndex !== undefined
              ? options[changes.highlightedIndex]
              : state.selectedItem,
        };
      case Downshift.stateChangeTypes.changeInput:
        return {
          ...changes,
          highlightedIndex: 0,
        };
      default:
        return {
          ...changes,
        };
    }
  };

  createOptionsFromPropsOptions(
    options,
    { getItemProps, highlightedIndex, selectedItem }
  ) {
    const { name, renderItem } = this.props;

    return options.map((item, index) => (
      <FormDropdown.Option
        key={item.value}
        {...getItemProps({
          key: item.value,
          id: `${name}-${item.value}`,
          "data-testid": `${name}-${item.value}`,
          item,
          index,
          isSelected: isEqual(selectedItem, item),
          isHighlighted: highlightedIndex === index,
        })}
      >
        {renderItem(item)}
      </FormDropdown.Option>
    ));
  }

  getFilteredItems() {
    const { options } = this.props;
    const { inputValue } = this.state;

    return searchInList(options, inputValue, ["label"]);
  }

  get highlightedIndex() {
    const filteredItems = this.getFilteredItems();
    const { selectedValue } = this.state;

    const selectedOptionIndex = selectedValue
      ? filteredItems.findIndex(item => item.value === selectedValue.value)
      : 0;

    return selectedOptionIndex > 0 ? selectedOptionIndex : 0;
  }

  render() {
    const {
      options,
      onChange,
      withSearch,
      listRef,
      width,
      disabled,
      onInputChange,
      placeholder,
      name,
    } = this.props;
    const { preselectedItem, inputValue, selectedValue } = this.state;

    return (
      <Downshift
        selectedItem={selectedValue}
        itemToString={item => (item ? item.label : "")}
        stateReducer={this.stateReducer}
        defaultHighlightedIndex={this.highlightedIndex}
        inputValue={inputValue}
        onChange={onChange}
        onStateChange={this.handleStateChange}
        onInputValueChange={onInputChange}
      >
        {stateAndHelpers => {
          const {
            isOpen,
            selectedItem,
            getRootProps,
            getToggleButtonProps,
            getInputProps,
            getMenuProps,
          } = stateAndHelpers;

          const optionsEls = this.createOptionsFromPropsOptions(
            options,
            stateAndHelpers
          );

          return (
            <StyledFormDropdown
              {...getRootProps({ width, disabled })}
              className={this.props.className}
            >
              <FormDropdownControl
                {...getToggleButtonProps({ disabled, "data-testid": name })}
              >
                {get(
                  withSearch ? preselectedItem : selectedItem,
                  "label",
                  placeholder
                )}
              </FormDropdownControl>
              <FormDropdownMenu
                {...getMenuProps({ isOpen }, { suppressRefError: true })}
                ref={listRef}
              >
                {isOpen && (
                  <React.Fragment>
                    {withSearch && (
                      <FormDropdownInputWrapper>
                        <FormDropdownInput
                          {...getInputProps()}
                          ref={this.inputRef}
                        />
                      </FormDropdownInputWrapper>
                    )}
                    {optionsEls}
                  </React.Fragment>
                )}
              </FormDropdownMenu>
            </StyledFormDropdown>
          );
        }}
      </Downshift>
    );
  }
}

FormDropdown.Option = FormDropdownOption;

export { FormDropdown, StyledFormDropdown };

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
import { identity } from "lodash-es";

class FormDropdown extends Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.object,
    withSearch: PropTypes.bool,
    disabled: PropTypes.bool,
    options: PropTypes.array,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
    onStateChange: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    onInputChange: PropTypes.func,
    listRef: PropTypes.object,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    withSearch: false,
    disabled: false,
    onStateChange: identity,
    onChange: identity,
    onInputChange: identity,
    placeholder: "",
  };

  static Option = ({ children, isHighlighted, ...restProps }) => {
    return (
      <FormDropdownOption {...restProps} isHighlighted={isHighlighted}>
        {children}
      </FormDropdownOption>
    );
  };

  inputRef = React.createRef();

  state = {
    inputValue: "",
    // Нужно для того, чтобы в контроле показывать
    // хайлатед по стрелкам элемент в дропдауне с поиском
    preselectedItem: this.props.value,
  };

  componentDidMount() {
    if (!this.props.value && this.props.withSearch && this.props.options) {
      this.setState({ preselectedItem: this.props.options[0] });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value && this.props.withSearch) {
      this.setState({ preselectedItem: this.props.value });
    }
  }

  handleStateChange = (changes, helpers) => {
    const { options, children } = this.props;

    if (changes.isOpen && this.inputRef.current) {
      this.inputRef.current.focus();
    }

    let preselectedItem = this.state.preselectedItem;

    if (
      changes.type === Downshift.stateChangeTypes.keyDownArrowUp ||
      changes.type === Downshift.stateChangeTypes.keyDownArrowDown
    ) {
      if (options) {
        preselectedItem = options[changes.highlightedIndex];
      } else {
        const preselectedChild = React.Children.toArray(children)[
          changes.highlightedIndex
        ];

        preselectedItem = {
          label: preselectedChild.props.label,
        };
      }
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

  createOptionsFromChildren(
    children,
    { getItemProps, highlightedIndex, selectedItem }
  ) {
    const { inputValue } = this.state;
    const { name } = this.props;

    return searchInList(React.Children.toArray(children), inputValue, [
      "props.label",
    ]).map((filteredChild, index) =>
      React.cloneElement(filteredChild, {
        ...getItemProps({
          id: `${name}-${filteredChild.props.value}`,
          "data-testid": `${name}-${filteredChild.props.value}`,
          item: {
            label: filteredChild.props.label,
            value: filteredChild.props.value,
          },
          key: index,
          index,
          isSelected:
            selectedItem && selectedItem.label === filteredChild.props.label,
          isHighlighted: highlightedIndex === index,
        }),
      })
    );
  }

  createOptionsFromPropsOptions(
    options,
    { getItemProps, highlightedIndex, selectedItem }
  ) {
    const { inputValue } = this.state;
    const { name } = this.props;

    return searchInList(options, inputValue, ["label"]).map((item, index) => (
      <FormDropdown.Option
        key={index}
        {...getItemProps({
          id: `${name}-${item.value}`,
          "data-testid": `${name}-${item.value}`,
          key: index,
          index,
          item,
          isSelected: selectedItem === item,
          isHighlighted: highlightedIndex === index,
        })}
      >
        {item.label}
      </FormDropdown.Option>
    ));
  }

  getFilteredItems() {
    const { children, options } = this.props;
    const { inputValue } = this.state;

    if (options) {
      return searchInList(options, inputValue, ["label"]);
    } else {
      return searchInList(React.Children.toArray(children), inputValue, [
        "props.label",
      ]).map(filteredChild => ({ label: filteredChild.props.label }));
    }
  }

  get highlightedIndex() {
    const { value } = this.props;

    const filteredItems = this.getFilteredItems();

    const selectedOptionIndex = value
      ? filteredItems.findIndex(item => item.label === value.label)
      : 0;

    return selectedOptionIndex > 0 ? selectedOptionIndex : 0;
  }

  render() {
    const {
      options,
      onChange,
      value,
      withSearch,
      children,
      listRef,
      width,
      disabled,
      onInputChange,
      placeholder,
      name,
    } = this.props;
    const { preselectedItem, inputValue } = this.state;

    return (
      <Downshift
        selectedItem={value}
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

          const optionsEls = options
            ? this.createOptionsFromPropsOptions(options, stateAndHelpers)
            : this.createOptionsFromChildren(children, stateAndHelpers);

          const preselectLabel = preselectedItem
            ? preselectedItem.label
            : placeholder;
          const selectLabel = selectedItem ? selectedItem.label : placeholder;

          return (
            <StyledFormDropdown
              {...getRootProps({ width, disabled })}
              className={this.props.className}
            >
              <FormDropdownControl
                {...getToggleButtonProps({ disabled, "data-testid": name })}
              >
                {withSearch ? preselectLabel : selectLabel}
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

export { FormDropdown, StyledFormDropdown };

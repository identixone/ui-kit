import React from "react";
import PropTypes from "prop-types";

import Downshift from "downshift";

import StyledFormMultiSelect from "./StyledFormMultiSelect";
import FormMultiSelectInput from "./FormMultiSelectInput";
import FormMultiSelectInputWrapper from "./FormMultiSelectInputWrapper";

import FormMultiSelectMenu from "./FormMultiSelectMenu";
import FormMultiSelectOption from "./FormMultiSelectMenu/FormMultiSelectOption";

import FormMultiSelectTags from "./FormMultiSelectTags";
import FormMultiSelectTagsItem from "./FormMultiSelectTags/FormMultiSelectTagsItem";

import { searchInList } from "../../../../utils/helpers";
import { some } from "lodash-es";

const BACKSPACE_KEY_CODE = 8;

class FormMultiSelect extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.array.isRequired,
    onInputChange: PropTypes.func,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    menuRef: PropTypes.object,
    isLoading: PropTypes.bool,
    className: PropTypes.string,
  };

  state = {
    selected: this.props.value || [],
    inputValue: "",
    isOpen: false,
    isMenuUp: false,
  };

  selectRef = React.createRef();
  inputRef = React.createRef();
  menuRef = React.createRef();
  tagsRef = React.createRef();

  stateReducer = (_, changes) => {
    switch (changes.type) {
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickItem:
        return {
          ...changes,
          highlightedIndex: 0,
        };
      default:
        return changes;
    }
  };

  componentDidMount() {
    this.inputRef.current.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    this.inputRef.current.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = ev => {
    if (ev.keyCode === BACKSPACE_KEY_CODE && this.state.inputValue === "") {
      this.removeLastItem();
      this.setState({ isOpen: false });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selected !== this.state.selected) {
      this.props.onChange(this.state.selected);
    }

    if (prevProps.value !== this.props.value) {
      this.setState({ selected: this.props.value || [] });
    }

    if (prevState.inputValue !== this.state.inputValue && !this.state.isOpen) {
      this.setState({ isOpen: true });
    }

    const actualMenuRef = this.props.menuRef || this.menuRef;

    if (
      !prevState.isOpen &&
      this.state.isOpen &&
      this.selectRef &&
      this.selectRef.current &&
      actualMenuRef &&
      actualMenuRef.current
    ) {
      const selectEl = this.selectRef.current;
      const menuEl = actualMenuRef.current;

      const isMenuUp =
        selectEl.getBoundingClientRect().top -
          menuEl.getBoundingClientRect().height >=
        0;

      this.setState({ isMenuUp });
    }
  }

  removeItem = item => {
    this.setState(({ selected }) => ({
      selected: selected.filter(i => i !== item),
    }));
  };

  removeLastItem = () => {
    this.setState(({ selected }) => ({
      selected: selected.slice(0, selected.length - 1),
    }));
  };

  addItem(item) {
    this.setState(({ selected }) => ({
      selected: [...selected, item],
    }));
  }

  handleChange = option => {
    this.addItem(option);
    this.setState({ inputValue: "", isOpen: true });
  };

  handleInputChange = inputValue => {
    const { onInputChange } = this.props;

    this.setState({ inputValue }, () => {
      onInputChange && onInputChange(inputValue);
    });
  };

  handleInputBlur = () => {
    this.setState({ isOpen: false, inputValue: "" });
  };

  closeMenu = () => {
    this.setState({ isOpen: false });
  };

  toggleMenu = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  };

  handleTagsClick = ({ target }) => {
    if (target !== this.tagsRef.current && target !== this.inputRef.current) {
      this.closeMenu();
      return;
    }

    this.inputRef.current.focus();
    this.toggleMenu();
  };

  render() {
    const {
      options,
      width,
      placeholder,
      menuRef = this.menuRef,
      name,
      isLoading,
      className,
    } = this.props;
    const { selected, inputValue, isOpen, isMenuUp } = this.state;

    return (
      <Downshift
        onChange={this.handleChange}
        itemToString={item => (item && item.label ? item.label : "")}
        stateReducer={this.stateReducer}
        defaultHighlightedIndex={0}
        inputValue={inputValue}
        onInputValueChange={this.handleInputChange}
        selectedItem={selected}
        isOpen={isOpen}
      >
        {({
          getItemProps,
          getMenuProps,
          highlightedIndex,
          selectedItem,
          getInputProps,
          getRootProps,
        }) => {
          return (
            <StyledFormMultiSelect
              {...getRootProps({ width, isLoading })}
              className={className}
              ref={this.selectRef}
            >
              <FormMultiSelectTags
                ref={this.tagsRef}
                data-testid={name}
                onClick={this.handleTagsClick}
              >
                {selected.map(selected => (
                  <FormMultiSelectTagsItem
                    name={name}
                    key={selected.label || selected}
                    title={selected.label || selected}
                    onCrossClick={() => {
                      this.removeItem(selected);
                      this.inputRef.current.focus();
                    }}
                  />
                ))}
                <FormMultiSelectInputWrapper>
                  <FormMultiSelectInput
                    ref={this.inputRef}
                    placeholder={
                      !selected.length && placeholder ? placeholder : undefined
                    }
                    {...getInputProps({
                      isOpen,
                      onBlur: this.handleInputBlur,
                    })}
                  />
                  <FormMultiSelectMenu
                    {...getMenuProps(
                      {
                        isOpen,
                        isLoading,
                        isUp: isMenuUp,
                      },
                      // https://github.com/downshift-js/downshift/issues/604#issuecomment-456574976
                      { suppressRefError: true }
                    )}
                    ref={menuRef || this.menuRef}
                  >
                    {isOpen &&
                      searchInList(
                        options,
                        inputValue,
                        options[0] && options[0].label && ["label"]
                      )
                        .filter(option => {
                          /** Проверка наличия объекта или примитива в массиве
                           * TODO: Возможно стоит вынести в отдельную функцию
                           */
                          return !(
                            some(selected, option) || selected.includes(option)
                          );
                        })
                        .map((item, index) => {
                          return (
                            <FormMultiSelectOption
                              key={item.value || item}
                              {...getItemProps({
                                id: `${name}-${item.value || item}`,
                                "data-testid": `${name}-${item.value || item}`,
                                index,
                                item,
                                isSelected: selectedItem === item,
                                isHighlighted: highlightedIndex === index,
                                disabled: item.disabled,
                              })}
                            >
                              {item.label || item}
                            </FormMultiSelectOption>
                          );
                        })}
                  </FormMultiSelectMenu>
                </FormMultiSelectInputWrapper>
              </FormMultiSelectTags>
            </StyledFormMultiSelect>
          );
        }}
      </Downshift>
    );
  }
}

export { FormMultiSelect, StyledFormMultiSelect };

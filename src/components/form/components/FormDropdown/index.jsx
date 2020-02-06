import React from "react";
import PropTypes from "prop-types";

import { useEffect, useRef, useState } from "react";
import { usePrevious } from "react-use";

import Downshift from "downshift";
import { StyledFormDropdown } from "./StyledFormDropdown";
import { FormDropdownControl } from "./FormDropdownControl";
import { FormDropdownMenu } from "./FormDropdownMenu";
import { FormDropdownOption } from "./FormDropdownOption";
import { FormDropdownInputWrapper } from "./FormDropdownInputWrapper";
import { FormDropdownInput } from "./FormDropdownInput";

import { searchInList } from "../../../../utils/helpers";
import { identity, property as prop, isEqual, get } from "lodash-es";

const { stateChangeTypes } = Downshift;

function FormDropdown({
  value,
  options,
  onChange,
  onStateChange,
  onInputChange,
  name,
  width,
  withSearch,
  renderItem,
  listRef,
  placeholder,
  disabled,
  className,
  "data-testid": testId,
  multiple,
}) {
  if (name) {
    testId = name;
  }

  const [preselected, setPreselected] = useState(value);
  const [selected, setSelected] = useState(value);
  useEffect(() => {
    if (value !== undefined) {
      setSelected(value);
      setPreselected(value);
    }
  }, [value]);

  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const prevInputValue = usePrevious(inputValue);
  useEffect(() => {
    if (prevInputValue !== inputValue) {
      onInputChange(inputValue);
    }
  }, [inputValue]);

  function getHighlighted(selected) {
    const selectedOptionIndex = selected
      ? searchInList(options, inputValue, ["label"]).findIndex(
          item => item.value === selected.value
        )
      : 0;

    return selectedOptionIndex > 0 ? selectedOptionIndex : 0;
  }

  function getNextSelectedOnArrow(options, changes) {
    const intendToHighlight = options[changes.highlightedIndex];
    const isArrowDown =
      changes.type === Downshift.stateChangeTypes.keyDownArrowDown;

    const nextAvailableOption =
      options[changes.highlightedIndex + (isArrowDown ? 1 : -1)];

    // Логика пропуска disabled options
    return !intendToHighlight.disabled
      ? intendToHighlight
      : nextAvailableOption
      ? nextAvailableOption
      : options[0];
  }

  function handleStateChange(changes, stateAndHelpers) {
    if (changes.isOpen && inputRef.current) {
      inputRef.current.focus();
    }

    if (value === undefined) {
      setPreselected(stateAndHelpers.selectedItem);
    }

    onStateChange(changes, stateAndHelpers);
  }

  function stateReducer(state, changes) {
    const hasToClearInputValue =
      inputValue && changes.selectedItem !== undefined;

    if (hasToClearInputValue) {
      setInputValue("");
    }

    if (changes.type === Downshift.stateChangeTypes.changeInput) {
      setInputValue(changes.inputValue);
    }

    if (
      changes.type === stateChangeTypes.keyDownArrowUp ||
      changes.type === stateChangeTypes.keyDownArrowDown
    ) {
      setPreselected(options[changes.highlightedIndex]);
    }

    const hasToSelectOnArrow = !multiple && !withSearch;
    const hasToCloseMenuOnSelect = !multiple;
    const actualSelected = changes.selectedItem || selected;

    switch (changes.type) {
      case Downshift.stateChangeTypes.keyDownArrowUp:
      case Downshift.stateChangeTypes.keyDownArrowDown:
        return {
          ...changes,
          selectedItem:
            hasToSelectOnArrow && changes.highlightedIndex !== undefined
              ? getNextSelectedOnArrow(options, changes)
              : state.selectedItem,
        };
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickItem:
        if (!hasToCloseMenuOnSelect) {
          return {
            ...changes,
            isOpen: state.isOpen,
            highlightedIndex: state.highlightedIndex,
          };
        }
      // eslint-disable-next-line no-fallthrough
      default:
        return {
          ...changes,
          highlightedIndex:
            actualSelected && !multiple
              ? getHighlighted(actualSelected)
              : changes.highlightedIndex !== undefined
              ? changes.highlightedIndex
              : state.highlightedIndex,
        };
    }
  }

  function handleChange(option) {
    if (multiple) {
      const selectedInOptions = selected.find(
        item => item.value === option.value
      );
      if (selectedInOptions) {
        onChange(selected.filter(item => !isEqual(item, selectedInOptions)));
      } else {
        onChange(selected.concat(option));
      }
    } else {
      onChange(option);
    }
  }

  function getRenderedSelected(selectedItem) {
    if (multiple) {
      const selectedString = selectedItem.map(prop("label")).join();

      if (selectedString.length > Number(width) / 10 - 10) {
        return `${name || "Selected"}: (${selected.length})`;
      }

      return selectedItem.length ? selectedString : placeholder;
    } else {
      return get(withSearch ? preselected : selectedItem, "label", placeholder);
    }
  }

  function getIsOptionSelected(option, selectedItem) {
    if (multiple) {
      return (
        selectedItem.find(item => item.value === option.value) !== undefined
      );
    } else {
      return isEqual(selectedItem, option);
    }
  }

  return (
    <Downshift
      initialSelectedItem={value}
      selectedItem={selected}
      inputValue={inputValue}
      itemToString={item => (item ? item.label : "")}
      stateReducer={stateReducer}
      onChange={handleChange}
      onStateChange={handleStateChange}
      defaultHighlightedIndex={getHighlighted(selected)}
    >
      {({
        isOpen,
        selectedItem,
        highlightedIndex,
        inputValue,

        getRootProps,
        getToggleButtonProps,
        getMenuProps,
        getInputProps,
        getItemProps,
      }) => {
        return (
          <StyledFormDropdown
            {...getRootProps({
              width,
              disabled,
              className,
              "data-testid": testId,
            })}
          >
            <FormDropdownControl
              {...getToggleButtonProps({
                disabled,
                isOpen,
                "data-testid": testId + "-control",
              })}
            >
              {getRenderedSelected(selectedItem)}
            </FormDropdownControl>
            <FormDropdownMenu
              {...getMenuProps(
                { isOpen, "data-testid": testId + "-menu" },
                { suppressRefError: true }
              )}
              ref={listRef}
            >
              {isOpen && (
                <React.Fragment>
                  {withSearch && (
                    <FormDropdownInputWrapper>
                      <FormDropdownInput
                        {...getInputProps({
                          "data-testid": testId + "-search",
                        })}
                        ref={inputRef}
                      />
                    </FormDropdownInputWrapper>
                  )}
                  {searchInList(options, inputValue, ["label"]).map(
                    (item, index) => (
                      <FormDropdownOption
                        key={item.value}
                        {...getItemProps({
                          key: item.value,
                          id: `${testId}-${item.value}`,
                          item,
                          index,
                          isSelected: getIsOptionSelected(item, selectedItem),
                          isHighlighted: highlightedIndex === index,
                          disabled: Boolean(item.disabled),
                          "data-testid": `${testId}-option-${item.value}`,
                        })}
                      >
                        {renderItem(item)}
                      </FormDropdownOption>
                    )
                  )}
                </React.Fragment>
              )}
            </FormDropdownMenu>
          </StyledFormDropdown>
        );
      }}
    </Downshift>
  );
}

const optionShape = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
});

FormDropdown.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.arrayOf(optionShape), optionShape]),
  withSearch: PropTypes.bool,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  options: PropTypes.array.isRequired,
  onStateChange: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onInputChange: PropTypes.func,
  listRef: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  renderItem: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  "data-testid": PropTypes.string,
};

FormDropdown.defaultProps = {
  withSearch: false,
  multiple: false,
  disabled: false,
  onChange: identity,
  onStateChange: identity,
  onInputChange: identity,
  placeholder: "",
  renderItem: prop("label"),
  options: [],
};

FormDropdown.Option = FormDropdownOption;

export { FormDropdown, StyledFormDropdown };

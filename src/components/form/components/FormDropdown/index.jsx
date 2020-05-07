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
import { FormDropdownResetButton } from "./FormDropdownResetButton";
import { FormDropdownOptionSelectedIcon } from "./FormDropdownOptionSelectedIcon";
import { Times } from "../../../icons";

import { searchInList, capitalize } from "../../../../utils/helpers";
import { identity, property as prop, isEqual, get } from "lodash-es";

const { stateChangeTypes } = Downshift;

function isDefault(option) {
  return Boolean(option.default);
}

function isSingle(option) {
  return Boolean(option.single);
}

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
  renderSelected,
  isFetching,
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

  useEffect(() => {
    const defaultOptions = options.filter(isDefault);
    const hasDefault = Boolean(defaultOptions.length);

    if (hasDefault && (!value || (multiple && value.length === 0))) {
      handleChange(null);
    }
  }, []);

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
          (item) => item.value === selected.value
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
        return {
          ...changes,
          isOpen: hasToCloseMenuOnSelect ? changes.isOpen : state.isOpen,
          highlightedIndex: hasToCloseMenuOnSelect
            ? changes.highlightedIndex
            : state.highlightedIndex,
        };
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
    const defaultOptions = options.filter(isDefault);
    const hasDefault = Boolean(defaultOptions.length);

    /**
     * clearSelection case
     */
    if (option === null) {
      if (hasDefault) {
        onChange(multiple ? defaultOptions : defaultOptions[0]);
      } else {
        onChange(multiple ? [] : null);
      }
      return;
    }

    /**
     *  single selected case
     */
    if (isSingle(option) && multiple) {
      onChange([option]);

      return;
    }

    if (multiple) {
      const selectedInOptions = selected.find(
        (item) => item.value === option.value
      );

      if (selectedInOptions) {
        const changes = selected
          .filter((option) => !isSingle(option))
          .filter((option) => !isEqual(option, selectedInOptions));

        if (hasDefault && changes.length === 0) {
          onChange(defaultOptions);
        } else {
          onChange(changes);
        }
      } else {
        onChange(selected.filter((option) => !isSingle(option)).concat(option));
      }
    } else {
      onChange(option);
    }
  }

  function getRenderedSelected(selectedItem) {
    if (typeof renderSelected === "function") {
      return renderSelected(selectedItem);
    }

    function processString(selectedString) {
      if (selectedString.length > Number(width) / 10 - 10) {
        return `${name ? capitalize(name) : "Selected"}: ${selected.length}`;
      }

      return selectedString;
    }

    if (multiple) {
      const selectedString = selectedItem.map(prop("label")).join(", ");

      return selectedItem.length ? processString(selectedString) : placeholder;
    } else {
      return get(withSearch ? preselected : selectedItem, "label", placeholder);
    }
  }

  function getIsOptionSelected(option, selectedItem) {
    if (multiple) {
      return (
        selectedItem.find((item) => item.value === option.value) !== undefined
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
      itemToString={(item) => (item ? item.label : "")}
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

        closeMenu,
        clearSelection,

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
              isFetching,
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
              {multiple &&
              (!selectedItem.every(isDefault) ||
                selectedItem.filter(isDefault).length !==
                  options.filter(isDefault).length) ? (
                <FormDropdownResetButton
                  data-testid={`${testId}-reset`}
                  onClick={(e) => {
                    e.stopPropagation();
                    clearSelection();
                    closeMenu();
                  }}
                >
                  <Times size="12" />
                </FormDropdownResetButton>
              ) : null}
            </FormDropdownControl>
            <FormDropdownMenu
              {...getMenuProps(
                { isOpen, "data-testid": testId + "-menu", ref: listRef },
                { suppressRefError: true }
              )}
            >
              {isOpen && (
                <React.Fragment>
                  {withSearch && (
                    <FormDropdownInputWrapper>
                      <FormDropdownInput
                        {...getInputProps({
                          "data-testid": testId + "-search",
                          ref: inputRef,
                        })}
                      />
                    </FormDropdownInputWrapper>
                  )}
                  {searchInList(options, inputValue, ["label"]).map(
                    (item, index) => {
                      const selected = getIsOptionSelected(item, selectedItem);

                      return (
                        <FormDropdownOption
                          key={item.value}
                          {...getItemProps({
                            key: item.value,
                            id: `${testId}-${item.value}`,
                            item,
                            index,
                            selected,
                            highlighted: highlightedIndex === index,
                            disabled: Boolean(item.disabled),
                            "data-testid": `${testId}-option-${item.value}`,
                          })}
                        >
                          {multiple && selected && (
                            <FormDropdownOptionSelectedIcon size="10" />
                          )}
                          {renderItem(item)}
                        </FormDropdownOption>
                      );
                    }
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
});

FormDropdown.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    optionShape,
    PropTypes.arrayOf(optionShape),
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
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
  renderSelected: PropTypes.func,
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
FormDropdown.Menu = FormDropdownMenu;

export { FormDropdown, StyledFormDropdown };

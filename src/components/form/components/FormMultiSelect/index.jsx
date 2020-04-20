import React from "react";
import PropTypes from "prop-types";

import { useState, useEffect, useRef } from "react";
import { usePrevious, useUpdateEffect } from "react-use";

import Downshift from "downshift";
import { StyledFormMultiSelect } from "./StyledFormMultiSelect";
import { FormMultiSelectInput } from "./FormMultiSelectInput";
import { FormMultiSelectInputWrapper } from "./FormMultiSelectInputWrapper";
import { FormMultiSelectMenu } from "./FormMultiSelectMenu";
import { FormMultiSelectOption } from "./FormMultiSelectMenu/FormMultiSelectOption";
import { FormMultiSelectTags } from "./FormMultiSelectTags";
import { FormMultiSelectTagsItem } from "./FormMultiSelectTags/FormMultiSelectTagsItem";

import {
  searchInList,
  getStringShort,
  hasProperty,
} from "../../../../utils/helpers";
import { some } from "lodash-es";
import { getTestId } from "../../utils";

const BACKSPACE_KEY_CODE = 8;

function FormMultiSelect(props) {
  const {
    options,
    value,
    onChange,
    onInputChange,
    menuRef,
    width,
    isLoading,
    placeholder,
    className,
    name,
  } = props;
  const testId = getTestId(name, props["data-testid"]);
  const [selected, setSelected] = useState(value);
  const prevSelected = usePrevious(selected);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const tagsRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;

    function handleKeyDown(ev) {
      if (ev.keyCode === BACKSPACE_KEY_CODE && ev.target.value === "") {
        // Удаляем последний элемент
        setSelected((selected) => selected.slice(0, selected.length - 1));
        setIsOpen(false);
      }
    }

    if (input) {
      input.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (input) {
        input.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);

  const prevInputValue = usePrevious(inputValue);
  useUpdateEffect(() => {
    if (prevInputValue !== inputValue) {
      if (!isOpen) {
        setIsOpen(true);
      }

      if (onInputChange) {
        onInputChange(inputValue);
      }
    }
  }, [inputValue]);

  useUpdateEffect(() => {
    onChange(selected);
  }, [selected]);
  useUpdateEffect(() => {
    if (value !== prevSelected) {
      setSelected(value || []);
    }
  }, [value]);

  function stateReducer(_, changes) {
    if (changes.type === Downshift.stateChangeTypes.changeInput) {
      setInputValue(changes.inputValue);
    }

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
  }

  function addItem(item) {
    setSelected((selected) => [...selected, item]);
  }

  function removeItem(item) {
    setSelected((selected) => selected.filter((i) => i !== item));
  }

  function handleChange(option) {
    addItem(option);
    setInputValue("");
    setIsOpen(true);
  }

  function handleInputBlur() {
    setInputValue("");
    setIsOpen(false);
  }

  function handleTagsClick({ target }) {
    if (target !== tagsRef.current && target !== inputRef.current) {
      setIsOpen(false);
      return;
    }

    inputRef.current.focus();
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <Downshift
      onChange={handleChange}
      itemToString={(item) => (item && item.label ? item.label : "")}
      stateReducer={stateReducer}
      defaultHighlightedIndex={0}
      inputValue={inputValue}
      selectedItem={selected}
      isOpen={isOpen}
      data-testid={testId}
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
            {...getRootProps({
              width,
              isLoading,
              className,
              "data-testid": testId,
            })}
          >
            <FormMultiSelectTags
              ref={tagsRef}
              onClick={handleTagsClick}
              data-testid={`${testId}-tags`}
            >
              {selected.map((selected) => {
                const tagName = selected.label || selected;
                const tagValue = selected.value || selected;

                return (
                  <FormMultiSelectTagsItem
                    key={tagValue}
                    title={tagName}
                    data-testid={`${testId}-tag-${tagValue}`}
                    onCrossClick={() => {
                      removeItem(selected);
                      inputRef.current.focus();
                    }}
                  />
                );
              })}
              <FormMultiSelectInputWrapper>
                <FormMultiSelectInput
                  {...getInputProps({
                    isOpen,
                    onBlur: handleInputBlur,
                    placeholder:
                      !selected.length && placeholder ? placeholder : undefined,
                    "data-testid": `${testId}-input`,
                    ref: inputRef,
                  })}
                />
                <FormMultiSelectMenu
                  {...getMenuProps(
                    {
                      isOpen,
                      isLoading,
                      "data-testid": `${testId}-menu`,
                      ref: menuRef,
                    },
                    { suppressRefError: true }
                  )}
                >
                  {isOpen &&
                    searchInList(
                      options,
                      inputValue,
                      options[0] && options[0].label && ["label"]
                    )
                      .filter((option) => {
                        /** Проверка наличия объекта или примитива в массиве
                         * TODO: Возможно стоит вынести в отдельную функцию
                         */
                        return !(
                          some(selected, option) || selected.includes(option)
                        );
                      })
                      .map((item, index) => {
                        const itemValue = hasProperty(item, "value")
                          ? item.value
                          : item;
                        const itemLabel = hasProperty(item, "label")
                          ? item.label
                          : item;

                        return (
                          <FormMultiSelectOption
                            key={itemValue}
                            {...getItemProps({
                              id: `${name}-${itemValue}`,
                              "data-testid": `${testId}-option-${itemValue}`,
                              index,
                              item,
                              isSelected: selectedItem === item,
                              isHighlighted: highlightedIndex === index,
                              disabled: item.disabled,
                            })}
                          >
                            {getStringShort(itemLabel, 20)}
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

FormMultiSelect.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.array,
  onInputChange: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  menuRef: PropTypes.object,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
};

FormMultiSelect.defaultProps = {
  options: [],
  value: [],
};

FormMultiSelect.Menu = FormMultiSelectMenu;
FormMultiSelect.Option = FormMultiSelectOption;

export { FormMultiSelect, StyledFormMultiSelect };

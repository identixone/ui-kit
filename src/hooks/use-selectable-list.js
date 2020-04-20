import { useState } from "react";
import { usePrevious, useUpdateEffect } from "react-use";

import { uniq, isEqual } from "lodash-es";
import { hasProperty } from "../utils/helpers";

function useSelectableList({ options, value, onChange }) {
  const [selected, setSelected] = useState(value || []);
  const prevSelected = usePrevious(selected);
  const [lastChecked, setLastChecked] = useState(null);

  function getOptionPresentation(option) {
    return hasProperty(option, "value") ? String(option.value) : String(option);
  }

  useUpdateEffect(() => {
    if (onChange && !isEqual(prevSelected, selected)) {
      onChange(selected);
    }
  }, [selected]);

  useUpdateEffect(() => {
    setSelected(value);
  }, [value]);

  function selectAll() {
    setSelected(options.map(getOptionPresentation));
  }

  function deselectAll() {
    setSelected([]);
  }

  function toggleSelected(option) {
    const optionPresentation = getOptionPresentation(option);

    setSelected((selected) =>
      selected.includes(optionPresentation)
        ? selected.filter((sel) => optionPresentation !== sel)
        : selected.concat(optionPresentation)
    );
  }

  function toggleIntermediateOptions(checkFrom, checkTo, isCheck) {
    const stringOptions = options.map(getOptionPresentation);

    if (stringOptions.indexOf(checkFrom) > stringOptions.indexOf(checkTo)) {
      [checkTo, checkFrom] = [checkFrom, checkTo];
    }

    const hasToCheck = stringOptions
      .filter(
        (_, key) =>
          stringOptions.indexOf(checkFrom) < key &&
          key < stringOptions.indexOf(checkTo)
      )
      .concat([checkFrom, checkTo]);

    setSelected((selected) =>
      isCheck
        ? uniq(selected.concat(hasToCheck))
        : selected.filter((option) => !hasToCheck.includes(option))
    );
  }

  function onCheckboxChange(event) {
    const { name: option } = event.target;
    toggleSelected(option);
    setLastChecked(option);

    const { shiftKey } = event.nativeEvent;
    const isCheck = !selected.includes(option);
    if (shiftKey && option !== lastChecked) {
      toggleIntermediateOptions(lastChecked, option, isCheck);
    }
  }

  const hasOptions = options && options.length > 0;

  return {
    selected,
    selectAll,
    deselectAll,
    toggleSelected,
    onCheckboxChange,
    isAllSelected: hasOptions && selected.length === options.length,
    isAllDeselected: hasOptions && selected.length === 0,
    hasOptions: options.length !== 0,
    hasSelected: selected.length !== 0,
  };
}

export { useSelectableList };

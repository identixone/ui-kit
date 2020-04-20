import React from "react";
import PropTypes from "prop-types";

import { useState, useRef, useMemo } from "react";
import { useUpdateEffect } from "react-use";
import { usePositionPopup } from "../../hooks";

import { StyledDatePicker } from "./StyledDatePicker";
import { DatePickerPopup } from "./DatePickerPopup";
import { DatePickerTabs } from "./DatePickerTabs";
import { DatePickerBottom } from "./DatePickerBottom";
import { DatePickerControl } from "./DatePickerControl";
import { DatePickerError } from "./DatePickerError";
import { DatePickerTotalTime } from "./DatePickerTotalTime";
import { DatePickerResetButton } from "./DatePickerResetButton";
import { Times } from "../icons";

import { identity, isEqual } from "lodash-es";
import { isEqual as isDatesEqual } from "date-fns";
import dayjs from "dayjs";

const DatePickerContext = React.createContext({
  value: [],
  onChange: identity,
  error: null,
  setError: identity,
  initialDateFrom: null,
  initialDateTo: null,
});

export function formatDateTime(value) {
  return dayjs(value).format("YYYY/MM/DD (HH:mm:ss)");
}

function DatePicker({
  value,
  onChange,
  valuesOnReset,
  onReset,
  onStateChange,
  initialDateFrom,
  initialDateTo,
  className,
  "data-testid": testId,
}) {
  const [error, setError] = useState(null);
  const popupTrigger = useRef(null);
  const filterWrapper = useRef(null);
  const {
    Portal,
    bind,
    // coords,
    popupInner,
    togglePortal,
    closePortal,
    isOpen,
    // targetParams,
  } = usePositionPopup({
    pupupTrigger: popupTrigger,
    position: "bottom",
    bindTo: filterWrapper.current,
  });

  // function getPopupLeftCoord() {
  //   if (popupInner.current) {
  //     if (targetParams.width > popupInner.current.offsetWidth) {
  //       return (
  //         coords.left + targetParams.width - popupInner.current.offsetWidth
  //       );
  //     }

  //     return coords.left;
  //   }
  // }

  useUpdateEffect(() => {
    if (!isOpen) {
      if (!value[0] && value[1]) {
        const dayBefore = dayjs(value[1]).subtract(1, "day").toDate();
        onChange([dayBefore, value[1]]);
      }

      if (value[0] && !value[1]) {
        const dayAfter = dayjs(value[0]).add(1, "day").toDate();
        onChange([value[0], dayAfter]);
      }
    }

    if (onStateChange) {
      onStateChange({ isOpen });
    }
  }, [isOpen]);

  function getValueRender(value) {
    if (!value[0] && !value[1]) return "All dates";
    if (value[0] && !value[1]) return `From ${formatDateTime(value[0])}`;
    if (!value[0] && value[1]) return `To ${formatDateTime(value[1])}`;

    if (isDatesEqual(value[0], initialDateFrom)) {
      return `All to ${formatDateTime(value[1])}`;
    }

    return formatDateTime(value[0]) + " - " + formatDateTime(value[1]);
  }

  const store = useMemo(
    () => ({
      value,
      onChange,
      error,
      setError,
      initialDateFrom,
      initialDateTo,
      testId,
    }),
    [value, error, initialDateFrom, initialDateTo, testId]
  );

  return (
    <DatePickerContext.Provider value={store}>
      <StyledDatePicker ref={filterWrapper} className={className}>
        <DatePickerControl
          {...bind}
          data-testid={`${testId}-control`}
          ref={popupTrigger}
          onClick={togglePortal}
        >
          {getValueRender(value)}
          {(value[0] || value[1]) && (
            <DatePickerResetButton
              data-testid={`${testId}-reset`}
              onClick={(e) => {
                e.stopPropagation();
                if (!isEqual(value, valuesOnReset)) {
                  onChange(valuesOnReset);
                }

                if (onReset) {
                  onReset(value, valuesOnReset);
                }

                closePortal();
              }}
            >
              <Times size="12" />
            </DatePickerResetButton>
          )}
        </DatePickerControl>
        <Portal>
          <DatePickerPopup
            isOpen={isOpen}
            ref={popupInner}
            data-testid={`${testId}-popup`}
          >
            {/* Сбрасываем все локальные состояния по открытию/закрытию */}
            <DatePickerTabs key={isOpen} />
            <DatePickerBottom>
              <DatePickerError />
              <DatePickerTotalTime />
            </DatePickerBottom>
          </DatePickerPopup>
        </Portal>
      </StyledDatePicker>
    </DatePickerContext.Provider>
  );
}

DatePicker.propTypes = {
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onStateChange: PropTypes.func,
  initialDateFrom: PropTypes.string,
  initialDateTo: PropTypes.string,
  valuesOnReset: PropTypes.array.isRequired,
  onReset: PropTypes.func,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
};

DatePicker.defaultProps = {
  value: [null, null],
  valuesOnReset: [null, null],
  "data-testid": "date-picker",
};

export { DatePicker, DatePickerContext };

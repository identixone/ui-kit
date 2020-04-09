import React from "react";
import PropTypes from "prop-types";

import { useState, useRef, useMemo } from "react";
import { useUpdateEffect } from "react-use";
import { usePositionPopup } from "../../../hooks";

import { EntriesDateTimeFilterPopup } from "./EntriesDateTimeFilterPopup";
import { EntriesDateTimeFilterTabs } from "./EntriesDateTimeFilterTabs";
import { EntriesDateTimeFilterBottom } from "./EntriesDateTimeFilterBottom";
import { EntriesDateTimeFilterControl } from "./EntriesDateTimeFilterControl";
import { EntriesDateTimeFilterError } from "./EntriesDateTimeFilterError";
import { EntriesDateTimeFilterTotalTime } from "./EntriesDateTimeFilterTotalTime";
import { EntriesDateTimeFilterResetButton } from "./EntriesDateTimeFilterResetButton";
import { Times } from "../../icons";

import { identity } from "lodash-es";
import dayjs from "dayjs";
import { isSameDate } from "../../../utils/helpers";

const EntriesDateTimeFilterContext = React.createContext({
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

function EntriesDateTimeFilter({
  value,
  onChange,
  valuesOnReset,
  onReset,
  onStateChange,
  initialDateFrom,
  initialDateTo,
}) {
  const [error, setError] = useState(null);
  const popupTrigger = useRef(null);
  const {
    Portal,
    bind,
    coords,
    popupInner,
    togglePortal,
    closePortal,
    isOpen,
    targetParams,
  } = usePositionPopup({
    pupupTrigger: popupTrigger,
    position: "bottom",
  });

  function getPopupLeftCoord() {
    if (popupInner.current) {
      if (targetParams.width > popupInner.current.offsetWidth) {
        return (
          coords.left + targetParams.width - popupInner.current.offsetWidth
        );
      }

      return coords.left;
    }
  }

  useUpdateEffect(() => {
    if (!isOpen) {
      if (!value[0] && value[1]) {
        const dayBefore = dayjs(value[1])
          .subtract(1, "day")
          .toDate();

        onChange([dayBefore, value[1]]);
      }

      if (value[0] && !value[1]) {
        const dayAfter = dayjs(value[0])
          .add(1, "day")
          .toDate();

        onChange([value[0], dayAfter]);
      }
    }

    onStateChange({ isOpen });
  }, [isOpen]);

  function getValueRender(value) {
    if (!value[0] && !value[1]) return "All dates";
    if (value[0] && !value[1]) return `From ${formatDateTime(value[0])}`;
    if (!value[0] && value[1]) return `To ${formatDateTime(value[1])}`;

    if (isSameDate(value[0], initialDateFrom)) {
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
    }),
    [value, error, initialDateFrom, initialDateTo]
  );

  return (
    <EntriesDateTimeFilterContext.Provider value={store}>
      <EntriesDateTimeFilterControl
        {...bind}
        data-testid="entries-date-time-picker-control"
        data-current-date={initialDateTo}
        ref={popupTrigger}
        onClick={togglePortal}
      >
        {getValueRender(value)}
        {(value[0] || value[1]) && (
          <EntriesDateTimeFilterResetButton
            data-testid="entries-date-time-picker-reset"
            onClick={e => {
              e.stopPropagation();
              onChange(valuesOnReset);
              if (onReset) {
                onReset();
              }
              closePortal();
            }}
          >
            <Times size="12" />
          </EntriesDateTimeFilterResetButton>
        )}
      </EntriesDateTimeFilterControl>
      <Portal>
        <EntriesDateTimeFilterPopup
          style={{
            left: getPopupLeftCoord(),
            top: coords.top,
          }}
          isOpen={isOpen}
          ref={popupInner}
        >
          {/* Сбрасываем все локальные состояния по открытию/закрытию */}
          <EntriesDateTimeFilterTabs key={isOpen} />
          <EntriesDateTimeFilterBottom>
            <EntriesDateTimeFilterError />
            <EntriesDateTimeFilterTotalTime />
          </EntriesDateTimeFilterBottom>
        </EntriesDateTimeFilterPopup>
      </Portal>
    </EntriesDateTimeFilterContext.Provider>
  );
}

EntriesDateTimeFilter.propTypes = {
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onStateChange: PropTypes.func.isRequired,
  initialDateFrom: PropTypes.string.isRequired,
  initialDateTo: PropTypes.string.isRequired,
  valuesOnReset: PropTypes.array.isRequired,
  onReset: PropTypes.func,
};

EntriesDateTimeFilter.defaultProps = {
  valuesOnReset: [null, null],
};

export { EntriesDateTimeFilter, EntriesDateTimeFilterContext };

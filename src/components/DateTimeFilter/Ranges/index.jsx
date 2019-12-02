import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import StyledRanges from "./StyledRanges";
import StyledRange from "./StyledRange";
import StyledRangeHeader from "./StyledRangeHeader";
import { useTranslation } from "react-i18next";

const RANGE = [
  {
    from: setStartDayTime(moment()),
    to: setEndDayTime(moment()),
    title: "Today",
  },
  {
    from: setStartDayTime(moment().subtract(1, "days")),
    to: setEndDayTime(moment().subtract(1, "days")),
    title: "Yesterday",
  },
  {
    from: setStartDayTime(moment().subtract(7, "days")),
    to: setEndDayTime(moment()),
    title: "Last 7 days",
  },
  {
    from: moment().startOf("isoWeek"),
    to: moment().endOf("isoWeek"),
    title: "Current week",
  },
  {
    from: moment().startOf("month"),
    to: moment().endOf("month"),
    title: "Current month",
  },
  {
    from: moment()
      .subtract(1, "weeks")
      .startOf("isoWeek"),
    to: moment()
      .subtract(1, "weeks")
      .endOf("isoWeek"),
    title: "Previous week",
  },
  {
    from: moment()
      .subtract(1, "months")
      .startOf("month"),
    to: moment()
      .subtract(1, "months")
      .endOf("month"),
    title: "Previous month",
  },
];

function Ranges({ onChange }) {
  const { t } = useTranslation("DateTimeFilter");

  function handleClick(startDate, endDate) {
    onChange({ startDate, endDate });
  }

  return (
    <StyledRanges>
      <span>
        <StyledRangeHeader>{t("Ranges")}: </StyledRangeHeader>
      </span>
      <div>
        {RANGE.map((item, index) => {
          return (
            <StyledRange
              key={index}
              data-id="0"
              onClick={() => handleClick(item.from, item.to)}
            >
              {t(`${item.title}`)}
            </StyledRange>
          );
        })}
      </div>
    </StyledRanges>
  );
}

Ranges.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Ranges;

function setStartDayTime(date) {
  return date.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
}
function setEndDayTime(date) {
  return date.set({ hour: 23, minute: 59, second: 59, millisecond: 999 });
}

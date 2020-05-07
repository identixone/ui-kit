import React from "react";

import { useContext } from "react";

import { StyledDatePickerTotalTime } from "./StyledDatePickerTotalTime";
import { DatePickerContext } from "../index";

import dayjs from "dayjs";

function DatePickerTotalTime() {
  const { value, initialDateFrom, initialDateTo } = useContext(
    DatePickerContext
  );

  const isDateToInitial =
    value[1] &&
    initialDateTo &&
    initialDateTo === new Date(value[1]).toISOString();

  const isDateFromInitial =
    value[0] &&
    initialDateFrom &&
    initialDateFrom === new Date(value[0]).toISOString();

  if ((!value[0] || !value[1]) && !isDateToInitial && !isDateFromInitial) {
    return null;
  }

  const diffYear = dayjs(value[1]).diff(value[0], "year");
  const diffMonth = dayjs(value[1])
    .subtract(dayjs(value[1]).diff(value[0], "year"), "year")
    .diff(value[0], "month");
  const diffDay = dayjs(value[1])
    .subtract(dayjs(value[1]).diff(value[0], "month"), "month")
    .diff(value[0], "day");
  const diffHour = dayjs(value[1])
    .subtract(dayjs(value[1]).diff(value[0], "day"), "day")
    .diff(value[0], "hour");
  const diffMinute = dayjs(value[1])
    .subtract(dayjs(value[1]).diff(value[0], "hour"), "hour")
    .diff(value[0], "minute");
  const diffSecond = dayjs(value[1])
    .subtract(dayjs(value[1]).diff(value[0], "minute"), "minute")
    .diff(value[0], "second");

  return (
    <StyledDatePickerTotalTime>
      Total time selected:{" "}
      {isDateToInitial && isDateFromInitial ? (
        <b>all</b>
      ) : (
        <b>
          {diffYear ? diffYear + "y " : null}
          {diffMonth ? diffMonth + "m " : null}
          {diffDay ? diffDay + "d " : null}
          {diffHour ? diffHour + "h " : null}
          {diffMinute ? diffMinute + "m " : null}
          {diffSecond ? diffSecond + "s" : null}
        </b>
      )}
    </StyledDatePickerTotalTime>
  );
}

export { DatePickerTotalTime };

import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import StyledRanges from "./StyledRanges";
import StyledRange from "./StyledRange";
import StyledRangeHeader from "./StyledRangeHeader";

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
    from: moment().startOf("week"),
    to: moment().endOf("week"),
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
      .startOf("week"),
    to: moment()
      .subtract(1, "weeks")
      .endOf("week"),
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

export default class Ranges extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  };

  render() {
    return (
      <StyledRanges>
        <span>
          <StyledRangeHeader>Ranges: </StyledRangeHeader>
        </span>
        <div>
          {RANGE.map((item, index) => {
            return (
              <StyledRange
                key={index}
                data-id="0"
                onClick={this.handleClick.bind(this, item.from, item.to)}
              >
                {item.title}
              </StyledRange>
            );
          })}
        </div>
      </StyledRanges>
    );
  }

  handleClick(startDate, endDate) {
    this.props.onChange({ startDate, endDate });
  }
}

function setStartDayTime(date) {
  return date.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
}
function setEndDayTime(date) {
  return date.set({ hour: 23, minute: 59, second: 59, millisecond: 999 });
}

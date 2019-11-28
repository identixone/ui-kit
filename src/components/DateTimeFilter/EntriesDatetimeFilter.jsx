/* eslint-disable react/no-unused-prop-types */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash-es";

import moment from "moment";

import { withFormik } from "formik";
import { object, number } from "yup";
import { withTranslation } from "react-i18next";

import Ranges from "./Ranges";
import DateTimeFields from "./DateTimeFields";
import StyledDatetimeButton from "./StyledDatetimeButton";
import StyledEntriesDatetimeBlueLine from "./StyledEntriesDatetimeBlueLine";
import StyledEntriesDatetimeFilterRow from "./StyledEntriesDatetimeFilterRow";
import StyledDateTimeForm from "./StyledDateTimeForm";
import StyledEntriesDatetime from "./StyledEntriesDatetime";
import StyledEntriesDatetimeContainer from "./StyledEntriesDatetimeContainer";
import { CalendarAlt } from "../../assets/icons";
import { ButtonToggleCalendar } from "../ButtonToggleCalendar";
import { resources } from "./DateTimeFilter.resources.js";

const resetValues = {
  yearFrom: "",
  monthFrom: "",
  dayFrom: "",
  hourFrom: "",
  minuteFrom: "",
  secondFrom: "",
  msFrom: "",
  yearTo: "",
  monthTo: "",
  dayTo: "",
  hourTo: "",
  minuteTo: "",
  secondTo: "",
  msTo: "",
};

export const config = {
  yearFrom: { max: 9999, min: 1 },
  monthFrom: { max: 12, maxDependedValue: 1 },
  dayFrom: { max: 31, maxDependedValue: 3 },
  hourFrom: { max: 23, maxDependedValue: 2 },
  minuteFrom: { max: 59, maxDependedValue: 5 },
  secondFrom: { max: 59, maxDependedValue: 5 },
  msFrom: { max: 999 },
  yearTo: { max: 9999, min: 1 },
  monthTo: { max: 12, maxDependedValue: 1 },
  dayTo: { max: 31, maxDependedValue: 3 },
  hourTo: { max: 23, maxDependedValue: 2 },
  minuteTo: { max: 59, maxDependedValue: 5 },
  secondTo: { max: 59, maxDependedValue: 5 },
  msTo: { max: 999 },
};

const typeFormats = {
  year: "YYYY",
  month: "MM",
  day: "DD",
  hour: "HH",
  minute: "mm",
  second: "ss",
  millisecond: "SSS",
};

const KEY_CODES = {
  enter: 13,
  arrowLeft: 37,
  arrowRight: 39,
  tab: 9,
  "0": 48,
  "9": 59,
  backspace: 8,
};

export class EntriesDatetimeFilter extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    resetForm: PropTypes.func,
    handleSubmit: PropTypes.func.isRequired,
    startDate: PropTypes.object,
    endDate: PropTypes.object,
    values: PropTypes.object,
    setErrors: PropTypes.func,
    t: PropTypes.func.isRequired,
    i18n: PropTypes.object.isRequired,
    errors: PropTypes.object,
    isApplying: PropTypes.bool,
    defaultStartDateData: PropTypes.object,
  };

  static defaultProps = {
    onChange: () => {},
    defaultStartDateData: {
      year: "2016",
      month: 0,
      day: 1,
      hour: "0",
      minute: "0",
      second: "0",
      millisecond: "000",
    },
  };

  constructor(props) {
    super(props);

    const { i18n } = props;
    i18n.addResourceBundle("en", "DateTimeFilter", resources.en);
    i18n.addResourceBundle("ru", "DateTimeFilter", resources.ru);
  }

  state = {
    startDate: this.props.startDate,
    endDate: this.props.endDate,
    isOpen: false,
    isApplying: false,
  };

  inputsRefs = [];

  setInputRef = ref => {
    if (ref) {
      this.inputsRefs[ref.tabIndex] = ref;
    }
  };

  componentDidUpdate(prevProps) {
    Object.keys(this.props.errors).forEach(key => {
      this.props.setFieldValue(key, config[key].max);
    });
    if (this.props.values !== prevProps.values) {
      this.props.setErrors({});
    }
    if (this.props.isApplying !== prevProps.isApplying) {
      this.setState({ isApplying: this.props.isApplying });
    }
  }

  handleRangeChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate }, () => {
      this.props.onChange({
        startDate,
        endDate,
        isApply: false,
      });
    });
  };

  handleToggle = isOpen => {
    this.setState({ isOpen });
  };

  handleToggleClick = isOpen => {
    if (!isOpen && !this.state.isApplying) {
      this.handleClear();
    }
    this.handleToggle(isOpen);
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleClear = () => {
    this.props.resetForm(resetValues);
    if (!this.state.isApplying) {
      this.props.onChange({
        startDate: null,
        endDate: null,
        isApply: true,
      });
    }
  };

  handleApply = (e, b) => {
    this.setState({
      isApplying: true,
    });
    this.props.handleSubmit(e, b);
    this.handleToggle(false);
  };

  handleReset = () => {
    this.props.resetForm(resetValues);

    this.props.onChange({
      startDate: null,
      endDate: null,
      isApply: true,
    });
    this.setState({
      isApplying: false,
    });
    this.handleToggle(false);
  };

  focusInput(number) {
    this.inputsRefs[number] && this.inputsRefs[number].focus();
  }

  focusNext(tabIndex) {
    this.focusInput(tabIndex + 1);
  }

  focusPrev(tabIndex) {
    this.focusInput(tabIndex - 1);
  }

  handleKeyPress = e => {
    const tabIndex = e.currentTarget.tabIndex;
    const isTabIndexLessThanForm = tabIndex < this.inputsRefs.length - 1;
    const isLastCaretPosition =
      e.target.selectionStart >= e.target.value.length;
    const isStartCaretPosition = e.target.selectionStart <= 0;
    const isNotFirstInputFocused = tabIndex > 1;

    const exceptionRules =
      (e.keyCode < KEY_CODES["0"] || e.keyCode > KEY_CODES["9"]) &&
      e.keyCode !== KEY_CODES.backspace &&
      e.keyCode !== KEY_CODES.tab &&
      e.keyCode !== KEY_CODES.enter;

    if (e.keyCode === KEY_CODES.enter && isTabIndexLessThanForm) {
      e.preventDefault();
      this.focusNext(tabIndex);
    } else if (e.keyCode === KEY_CODES.arrowRight) {
      if (isLastCaretPosition && isTabIndexLessThanForm) {
        e.preventDefault();
        this.focusNext(tabIndex);
      }
    } else if (e.keyCode === KEY_CODES.arrowLeft) {
      if (isStartCaretPosition && isNotFirstInputFocused) {
        this.focusPrev(tabIndex);
      }
    } else {
      if (exceptionRules) {
        e.preventDefault();
      }
    }
  };

  handleChange = (props, e) => {
    const value = e.currentTarget.value;

    const target = e.target;
    const tabIndex = e.currentTarget.tabIndex;
    props.onChange(value);

    const maxDependedValue = config[props.name].maxDependedValue;
    const isSymbolIndependent = maxDependedValue && value > maxDependedValue;
    const isCaretInLastPosition = target.maxLength === target.selectionStart;

    if (isCaretInLastPosition || isSymbolIndependent) {
      this.focusNext(tabIndex);
    }
  };

  handleBlur = (props, e) => {
    const { value, dataset } = e.target;

    this.props.setFieldValue(props.name, formatValue(value, dataset.type));
    props.onBlur(e);
  };

  render() {
    const { isOpen, isApplying } = this.state;
    const { startDate, endDate, values, t } = this.props;
    const isHaveNoValues = isEmpty(values);

    return (
      <StyledEntriesDatetime>
        <ButtonToggleCalendar
          isOpen={isOpen}
          height={isOpen ? "200px" : "default"}
          icon={<CalendarAlt size="16" />}
          mode={"blue"}
          isActive={startDate && endDate && isApplying}
          onChange={this.handleToggleClick}
          handleCrossClick={this.handleReset}
        />
        {isOpen && (
          <React.Fragment>
            <StyledEntriesDatetimeBlueLine />
            <StyledEntriesDatetimeContainer>
              <StyledEntriesDatetimeFilterRow>
                <StyledDateTimeForm
                  onSubmit={this.handleApply}
                  data-testid="datetime-form"
                >
                  <DateTimeFields
                    handleKeyPress={this.handleKeyPress}
                    setInputRef={this.setInputRef}
                    handleChange={this.handleChange}
                    handleBlur={this.handleBlur}
                  />
                  <Ranges onChange={this.handleRangeChange} />
                  <StyledDatetimeButton
                    type="submit"
                    disabled={isHaveNoValues}
                    size="medium"
                    data-testid="apply"
                    buttonTheme="dark"
                  >
                    {t("Apply")}
                  </StyledDatetimeButton>
                  <StyledDatetimeButton
                    onClick={this.handleClear}
                    disabled={isHaveNoValues}
                    size="medium"
                  >
                    {t("Clear")}
                  </StyledDatetimeButton>
                  <StyledDatetimeButton
                    onClick={this.handleReset}
                    disabled={!isApplying}
                    size="medium"
                  >
                    {t("Reset")}
                  </StyledDatetimeButton>
                </StyledDateTimeForm>
              </StyledEntriesDatetimeFilterRow>
            </StyledEntriesDatetimeContainer>
          </React.Fragment>
        )}
      </StyledEntriesDatetime>
    );
  }
}

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: function(props) {
    if (props.startDate) {
      const startDate = moment(props.startDate);
      const endDate = moment(props.endDate);
      return {
        yearFrom: formatValue(startDate.get("year"), "year"),
        monthFrom: formatValue(startDate.format("M"), "month"),
        dayFrom: formatValue(startDate.get("date"), "day"),
        hourFrom: formatValue(startDate.get("hour"), "hour"),
        minuteFrom: formatValue(startDate.get("minute"), "minute"),
        secondFrom: formatValue(startDate.get("second"), "second"),
        msFrom: formatValue(startDate.get("millisecond"), "millisecond"),

        yearTo: formatValue(endDate.get("year"), "year"),
        monthTo: formatValue(endDate.format("M"), "month"),
        dayTo: formatValue(endDate.get("date"), "day"),
        hourTo: formatValue(endDate.get("hour"), "hour"),
        minuteTo: formatValue(endDate.get("minute"), "minute"),
        secondTo: formatValue(endDate.get("second"), "second"),
        msTo: formatValue(endDate.get("millisecond"), "millisecond"),
      };
    }
    return {};
  },
  validateOnBlur: true,
  validateOnChange: true,
  validationSchema: object().shape({
    yearFrom: number()
      .max(config.yearFrom.max, "error")
      .min(config.yearFrom.min, "error"),
    monthFrom: number().max(config.monthFrom.max, "error"),
    dayFrom: number().max(config.dayFrom.max, "error"),
    hourFrom: number().max(config.hourFrom.max, "error"),
    minuteFrom: number().max(config.minuteFrom.max, "error"),
    secondFrom: number().max(config.secondFrom.max, "error"),
    msFrom: number().max(config.msFrom.max, "error"),
    yearTo: number()
      .max(config.yearTo.max, "error")
      .min(config.yearTo.min, "error"),
    monthTo: number().max(config.monthTo.max, "error"),
    dayTo: number().max(config.dayTo.max, "error"),
    hourTo: number().max(config.hourTo.max, "error"),
    minuteTo: number().max(config.minuteTo.max, "error"),
    secondTo: number().max(config.secondTo.max, "error"),
    msTo: number().max(config.msTo.max, "error"),
  }),
  handleSubmit: (values, { props }) => {
    const { defaultStartDateData } = props;
    const {
      yearFrom,
      monthFrom,
      dayFrom,
      hourFrom,
      minuteFrom,
      secondFrom,
      msFrom,
      yearTo,
      monthTo,
      dayTo,
      hourTo,
      minuteTo,
      secondTo,
      msTo,
    } = values;

    const today = moment();

    const startDate = moment({
      year: yearFrom || defaultStartDateData.year,
      month: monthFrom ? Number(monthFrom) - 1 : defaultStartDateData.month,
      day: dayFrom || defaultStartDateData.day,
      hour: hourFrom || defaultStartDateData.hour,
      minute: minuteFrom || defaultStartDateData.minute,
      second: secondFrom || defaultStartDateData.second,
      millisecond: msFrom || defaultStartDateData.millisecond,
    });

    const endDate = moment({
      year: yearTo || today.year(),
      month: monthTo ? Number(monthTo) - 1 : today.month(),
      day: dayTo || today.date(),
      hour: hourTo || config.hourTo.max,
      minute: minuteTo || config.minuteTo.max,
      second: secondTo || config.secondTo.max,
      millisecond: msTo || config.msTo.max,
    });
    if (!dayTo) {
      endDate.add(1, "days");
    }
    if (startDate > endDate || (startDate && !endDate)) {
      startDate &&
        endDate &&
        props.onChange({
          startDate,
          endDate: moment(startDate).add(1, "days"),
          isApply: true,
        });
    } else {
      startDate &&
        endDate &&
        props.onChange({
          startDate: startDate || moment(),
          endDate: endDate,
          isApply: true,
        });
    }
  },
})(withTranslation()(EntriesDatetimeFilter));

function formatValue(value, format) {
  return value === ""
    ? value
    : moment(value, typeFormats[format]).format(typeFormats[format]);
}

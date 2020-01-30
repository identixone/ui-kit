import React from "react";
import PropTypes from "prop-types";
import StyledDatetimePart from "./StyledDatetimePart";
import StyledDatetimeFormFieldGroup from "./StyledDatetimeFormFieldGroup";
import StyledDatetimeTitle from "./StyledDatetimeTitle";
import { FormField } from "../form/components";
import StyledDatetimeInput from "./StyledDatetimeInput";
import { useTranslation } from "react-i18next";

function DateTimeFields(props) {
  const { handleChange, handleBlur, setInputRef, handleKeyPress } = props;
  const { t } = useTranslation("DateTimeFilter");
  return (
    <React.Fragment>
      <StyledDatetimePart>
        <StyledDatetimeTitle>{t("From")}</StyledDatetimeTitle>
        <div>
          <StyledDatetimeFormFieldGroup>
            <FormField
              name="yearFrom"
              showError={false}
              render={props => {
                return (
                  <StyledDatetimeInput
                    {...props}
                    type="text"
                    maxLength="4"
                    data-type="year"
                    max="999"
                    min="1"
                    placeholder={t("YYYY")}
                    onChange={handleChange.bind(this, props)}
                    onBlur={handleBlur.bind(this, props)}
                    ref={setInputRef}
                    onKeyDown={handleKeyPress}
                    tabIndex="1"
                    data-testid="yearFrom"
                  />
                );
              }}
            />
            <FormField
              name="monthFrom"
              showError={false}
              render={props => (
                <StyledDatetimeInput
                  {...props}
                  type="text"
                  maxLength="2"
                  data-type="month"
                  placeholder={t("MM")}
                  onChange={handleChange.bind(this, props)}
                  onBlur={handleBlur.bind(this, props)}
                  ref={setInputRef}
                  onKeyDown={handleKeyPress}
                  tabIndex="2"
                  data-testid="monthFrom"
                />
              )}
            />
            <FormField
              name="dayFrom"
              showError={false}
              render={props => (
                <StyledDatetimeInput
                  {...props}
                  type="text"
                  maxLength="2"
                  data-type="day"
                  placeholder={t("DD")}
                  onChange={handleChange.bind(this, props)}
                  onBlur={handleBlur.bind(this, props)}
                  ref={setInputRef}
                  onKeyDown={handleKeyPress}
                  tabIndex="3"
                  data-testid="dayFrom"
                />
              )}
            />
          </StyledDatetimeFormFieldGroup>
          <StyledDatetimeFormFieldGroup>
            <FormField
              name="hourFrom"
              showError={false}
              render={props => (
                <StyledDatetimeInput
                  {...props}
                  type="text"
                  maxLength="2"
                  data-type="hour"
                  placeholder={t("HH")}
                  onChange={handleChange.bind(this, props)}
                  onBlur={handleBlur.bind(this, props)}
                  ref={setInputRef}
                  onKeyDown={handleKeyPress}
                  tabIndex="4"
                  data-testid="hourFrom"
                />
              )}
            />
            <FormField
              name="minuteFrom"
              showError={false}
              render={props => (
                <StyledDatetimeInput
                  {...props}
                  type="text"
                  maxLength="2"
                  data-type="minute"
                  placeholder={t("MM")}
                  onChange={handleChange.bind(this, props)}
                  onBlur={handleBlur.bind(this, props)}
                  ref={setInputRef}
                  onKeyDown={handleKeyPress}
                  tabIndex="5"
                  data-testid="minuteFrom"
                />
              )}
            />
            <FormField
              name="secondFrom"
              showError={false}
              render={props => (
                <StyledDatetimeInput
                  {...props}
                  type="text"
                  maxLength="2"
                  data-type="second"
                  placeholder={t("SS")}
                  onChange={handleChange.bind(this, props)}
                  onBlur={handleBlur.bind(this, props)}
                  ref={setInputRef}
                  onKeyDown={handleKeyPress}
                  tabIndex="6"
                  data-testid="secondFrom"
                />
              )}
            />
            <FormField
              name="msFrom"
              showError={false}
              render={props => (
                <StyledDatetimeInput
                  {...props}
                  type="text"
                  maxLength="3"
                  data-type="millisecond"
                  placeholder="000"
                  onChange={handleChange.bind(this, props)}
                  onBlur={handleBlur.bind(this, props)}
                  ref={setInputRef}
                  onKeyDown={handleKeyPress}
                  data-testid="msFrom"
                />
              )}
            />
          </StyledDatetimeFormFieldGroup>
        </div>
      </StyledDatetimePart>
      <StyledDatetimePart>
        <StyledDatetimeTitle>{t("To")}</StyledDatetimeTitle>
        <div>
          <StyledDatetimeFormFieldGroup>
            <FormField
              name="yearTo"
              showError={false}
              render={props => {
                return (
                  <StyledDatetimeInput
                    {...props}
                    type="text"
                    maxLength="4"
                    data-type="year"
                    max="999"
                    min="1"
                    placeholder={t("YYYY")}
                    onChange={handleChange.bind(this, props)}
                    onBlur={handleBlur.bind(this, props)}
                    ref={setInputRef}
                    onKeyDown={handleKeyPress}
                    tabIndex="7"
                    data-testid="yearTo"
                  />
                );
              }}
            />
            <FormField
              name="monthTo"
              showError={false}
              render={props => (
                <StyledDatetimeInput
                  {...props}
                  type="text"
                  maxLength="2"
                  data-type="month"
                  placeholder={t("MM")}
                  onChange={handleChange.bind(this, props)}
                  onBlur={handleBlur.bind(this, props)}
                  ref={setInputRef}
                  onKeyDown={handleKeyPress}
                  tabIndex="8"
                  data-testid="monthTo"
                />
              )}
            />
            <FormField
              name="dayTo"
              showError={false}
              render={props => (
                <StyledDatetimeInput
                  {...props}
                  type="text"
                  maxLength="2"
                  data-type="day"
                  placeholder={t("DD")}
                  onChange={handleChange.bind(this, props)}
                  onBlur={handleBlur.bind(this, props)}
                  ref={setInputRef}
                  onKeyDown={handleKeyPress}
                  tabIndex="9"
                  data-testid="dayTo"
                />
              )}
            />
          </StyledDatetimeFormFieldGroup>
          <StyledDatetimeFormFieldGroup>
            <FormField
              name="hourTo"
              showError={false}
              render={props => (
                <StyledDatetimeInput
                  {...props}
                  type="text"
                  maxLength="2"
                  data-type="hour"
                  placeholder={t("HH")}
                  onChange={handleChange.bind(this, props)}
                  onBlur={handleBlur.bind(this, props)}
                  ref={setInputRef}
                  onKeyDown={handleKeyPress}
                  tabIndex="10"
                  data-testid="hourTo"
                />
              )}
            />
            <FormField
              name="minuteTo"
              showError={false}
              render={props => (
                <StyledDatetimeInput
                  {...props}
                  type="text"
                  maxLength="2"
                  data-type="minute"
                  placeholder={t("MM")}
                  onChange={handleChange.bind(this, props)}
                  onBlur={handleBlur.bind(this, props)}
                  ref={setInputRef}
                  onKeyDown={handleKeyPress}
                  tabIndex="11"
                  data-testid="minuteTo"
                />
              )}
            />
            <FormField
              name="secondTo"
              showError={false}
              render={props => (
                <StyledDatetimeInput
                  {...props}
                  type="text"
                  maxLength="2"
                  data-type="second"
                  placeholder={t("SS")}
                  onChange={handleChange.bind(this, props)}
                  onBlur={handleBlur.bind(this, props)}
                  ref={setInputRef}
                  onKeyDown={handleKeyPress}
                  tabIndex="12"
                  data-testid="secondTo"
                />
              )}
            />
            <FormField
              name="msTo"
              showError={false}
              render={props => (
                <StyledDatetimeInput
                  {...props}
                  type="text"
                  maxLength="3"
                  data-type="millisecond"
                  placeholder="000"
                  onChange={handleChange.bind(this, props)}
                  onBlur={handleBlur.bind(this, props)}
                  ref={setInputRef}
                  onKeyDown={handleKeyPress}
                  data-testid="msTo"
                />
              )}
            />
          </StyledDatetimeFormFieldGroup>
        </div>
      </StyledDatetimePart>
    </React.Fragment>
  );
}

DateTimeFields.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  setInputRef: PropTypes.func.isRequired,
};

export default DateTimeFields;

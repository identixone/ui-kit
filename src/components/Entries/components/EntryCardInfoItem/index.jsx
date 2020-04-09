import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { EntryCardInfoItemLabel } from "./EntryCardInfoItemLabel";
import { EntryCardInfoItemValue } from "./EntryCardInfoItemValue";
import { textTrimStyles } from "../../../Text/TextTrim";

const StyledEntryCardInfoItem = styled.div`
  line-height: 18px;

  ${textTrimStyles}
`;

function EntryCardInfoItem({ children, label, value, isZeroEmpty, className }) {
  return (
    <StyledEntryCardInfoItem className={className}>
      {!label ? (
        children
      ) : (
        <React.Fragment>
          <EntryCardInfoItemLabel>{label}:</EntryCardInfoItemLabel>
          {value !== undefined ? (
            <EntryCardInfoItemValue isZeroEmpty={isZeroEmpty} value={value}>
              {children}
            </EntryCardInfoItemValue>
          ) : (
            <EntryCardInfoItemValue isZeroEmpty={isZeroEmpty}>
              {children}
            </EntryCardInfoItemValue>
          )}
        </React.Fragment>
      )}
    </StyledEntryCardInfoItem>
  );
}

EntryCardInfoItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  isZeroEmpty: PropTypes.bool,
  className: PropTypes.string,
};

EntryCardInfoItem.Value = EntryCardInfoItemValue;
EntryCardInfoItem.Label = EntryCardInfoItemLabel;

export { EntryCardInfoItem, StyledEntryCardInfoItem };
export * from "./EntryCardInfoItemLabel";
export * from "./EntryCardInfoItemValue";

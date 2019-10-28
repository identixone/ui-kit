import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { EntryCardInfoItemLabel } from "./EntryCardInfoItemLabel";
import { EntryCardInfoItemValue } from "./EntryCardInfoItemValue";

const StyledEntryCardInfoItem = styled.div`
  display: flex;
`;

function EntryCardInfoItem({ children, label, isZeroEmpty }) {
  return (
    <StyledEntryCardInfoItem>
      {!label ? (
        children
      ) : (
        <React.Fragment>
          <EntryCardInfoItemLabel>{label}</EntryCardInfoItemLabel>
          <EntryCardInfoItemValue isZeroEmpty={isZeroEmpty}>
            {children}
          </EntryCardInfoItemValue>
        </React.Fragment>
      )}
    </StyledEntryCardInfoItem>
  );
}

EntryCardInfoItem.propTypes = {
  label: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  isZeroEmpty: PropTypes.bool,
};

EntryCardInfoItem.Value = EntryCardInfoItemValue;
EntryCardInfoItem.Label = EntryCardInfoItemLabel;

export { EntryCardInfoItem, StyledEntryCardInfoItem };
export * from "./EntryCardInfoItemLabel";
export * from "./EntryCardInfoItemValue";

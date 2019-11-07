import React from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "styled-components";

import { StyledEntryCardEntryType } from "./StyledEntryCardEntryType";
import { EntryCardEntryTypeTitle } from "./EntryCardEntryTypeTitle";
import { EntryCardEntryTypeBadge } from "./EntryCardEntryTypeBadge";

function EntryCardEntryType({ title, type, className }) {
  const hasTitle = Boolean(title);

  return (
    <ThemeProvider theme={{ mode: type }}>
      <StyledEntryCardEntryType className={className}>
        {hasTitle && <EntryCardEntryTypeTitle>{title}</EntryCardEntryTypeTitle>}
        <EntryCardEntryTypeBadge>{type}</EntryCardEntryTypeBadge>
      </StyledEntryCardEntryType>
    </ThemeProvider>
  );
}

EntryCardEntryType.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
};

export {
  EntryCardEntryType,
  StyledEntryCardEntryType,
  EntryCardEntryTypeBadge,
};

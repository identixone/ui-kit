import React from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "styled-components";

import { StyledEntryCardEntryType } from "./StyledEntryCardEntryType";
import { EntryCardEntryTypeTitle } from "./EntryCardEntryTypeTitle";
import { EntryCardEntryTypeBadge } from "./EntryCardEntryTypeBadge";

function EntryCardEntryType({ title, type, theme, className }) {
  const hasTitle = Boolean(title);
  const appliedTheme = theme || type;

  return (
    <ThemeProvider theme={{ mode: appliedTheme }}>
      <StyledEntryCardEntryType className={className}>
        {hasTitle && <EntryCardEntryTypeTitle>{title}</EntryCardEntryTypeTitle>}
        <EntryCardEntryTypeBadge>{type}</EntryCardEntryTypeBadge>
      </StyledEntryCardEntryType>
    </ThemeProvider>
  );
}

EntryCardEntryType.propTypes = {
  type: PropTypes.string.isRequired,
  theme: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
};

export {
  EntryCardEntryType,
  StyledEntryCardEntryType,
  EntryCardEntryTypeBadge,
};

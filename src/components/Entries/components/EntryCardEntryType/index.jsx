import React from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "styled-components";

import { StyledEntryCardEntryType } from "./StyledEntryCardEntryType";

function EntryCardEntryType({ type, theme, className, children }) {
  const appliedTheme = theme || type;

  return (
    <ThemeProvider theme={{ mode: appliedTheme }}>
      <StyledEntryCardEntryType className={className}>
        {children}
      </StyledEntryCardEntryType>
    </ThemeProvider>
  );
}

EntryCardEntryType.propTypes = {
  type: PropTypes.string.isRequired,
  theme: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
};

export { EntryCardEntryType, StyledEntryCardEntryType };

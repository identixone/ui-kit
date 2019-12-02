import React from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "styled-components";
import { StyledEntryCardContainer } from "./StyledEntryCardContainer";
import { EntryCardActions } from "../EntryCardActions";

function EntryCardContainer({
  className,
  children,
  actions,
  deleted,
  theme,
  ...restProps
}) {
  return (
    <ThemeProvider theme={{ theme }}>
      <StyledEntryCardContainer
        className={className}
        deleted={deleted}
        {...restProps}
      >
        {children}
        <EntryCardActions>{actions}</EntryCardActions>
      </StyledEntryCardContainer>
    </ThemeProvider>
  );
}

EntryCardContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  actions: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  deleted: PropTypes.bool,
  theme: PropTypes.oneOf(["light", "dark"]),
};

EntryCardContainer.defaultProps = {
  theme: "light",
};

export { EntryCardContainer, StyledEntryCardContainer };

import React from "react";
import PropTypes from "prop-types";

import { StyledEntryCardContainer } from "./StyledEntryCardContainer";
import { EntryCardActions } from "../EntryCardActions";

function EntryCardContainer({
  className,
  children,
  actions,
  deleted,
  ...restProps
}) {
  return (
    <StyledEntryCardContainer
      className={className}
      deleted={deleted}
      {...restProps}
    >
      {children}
      <EntryCardActions>{actions}</EntryCardActions>
    </StyledEntryCardContainer>
  );
}

EntryCardContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  actions: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  deleted: PropTypes.bool,
};

export { EntryCardContainer, StyledEntryCardContainer };

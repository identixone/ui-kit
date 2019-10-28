import React from "react";
import PropTypes from "prop-types";

import { StyledEntryCardContainer } from "./StyledEntryCardContainer";
import { EntryCardAdditionalButtons } from "../EntryCardAdditionalButtons";

function EntryCardContainer({ className, children, actions, deleted }) {
  return (
    <StyledEntryCardContainer className={className} deleted={deleted}>
      {children}
      <EntryCardAdditionalButtons>{actions}</EntryCardAdditionalButtons>
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

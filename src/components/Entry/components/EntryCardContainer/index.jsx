import React from "react";
import PropTypes from "prop-types";

import { StyledEntryCardContainer } from "./StyledEntryCardContainer";

function EntryCardContainer({ entry, onClick, children }) {
  const { idxid, deleted } = entry;

  return (
    <StyledEntryCardContainer
      data-testid="entry-item"
      data-idxid={idxid}
      deleted={deleted}
      onClick={onClick}
    >
      {children}
    </StyledEntryCardContainer>
  );
}

EntryCardContainer.propTypes = {
  entry: PropTypes.object.isRequired,
  children: PropTypes.func,
  onClick: PropTypes.func,
};

EntryCardContainer.defaultProps = {
  entry: {},
};

export { EntryCardContainer, StyledEntryCardContainer };

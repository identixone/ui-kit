import React from "react";
import PropTypes from "prop-types";

import StyledSquareDark from "./StyledSquareDark";

import { Plus } from "../../assets/icons";

import PageFiltersListNotice from "./PageFiltersListNotice";

export default function EmptyListNotice({ title, handleClick }) {
  return (
    <PageFiltersListNotice data-testid="empty-list-notice">
      <span>{title} are not set, press</span>
      <StyledSquareDark onClick={handleClick}>
        <Plus size="16" />
      </StyledSquareDark>
      <span>to create the first one</span>
    </PageFiltersListNotice>
  );
}

EmptyListNotice.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes.func,
};

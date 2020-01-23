import React from "react";
import PropTypes from "prop-types";

import { StyledListLayoutListPagination } from "./StyledListLayoutListPagination";

export function ListLayoutListPagination({
  pagination = {
    limit: 5,
    offset: 0,
  },
  setPagination,
  totalCount,
}) {
  const { limit, offset } = pagination;

  const handleChange = ({ offset }) => {
    setPagination({ offset });
  };

  return (
    <StyledListLayoutListPagination
      limit={limit}
      offset={offset}
      totalCount={totalCount}
      onChange={handleChange}
    />
  );
}

ListLayoutListPagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  setPagination: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
};

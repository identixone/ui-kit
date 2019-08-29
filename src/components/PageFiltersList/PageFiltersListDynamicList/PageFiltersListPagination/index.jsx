import React from "react";
import PropTypes from "prop-types";

import { withPageFiltersListContext } from "../../PageFiltersListContext";
import { Pagination } from "../../../Pagination";

import StyledPageFiltersListPagination from "./StyledPageFiltersListPagination";

export function PageFiltersListPagination({
  pagination,
  setPagination,
  totalCount,
}) {
  const { limit, offset } = pagination;

  const handleChange = ({ offset }) => {
    setPagination({ offset });
  };

  return (
    <StyledPageFiltersListPagination>
      <Pagination
        isVisible={true}
        limit={limit}
        totalCount={totalCount}
        offset={offset}
        onChange={handleChange}
      />
    </StyledPageFiltersListPagination>
  );
}

PageFiltersListPagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  setPagination: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
};

export default withPageFiltersListContext(PageFiltersListPagination);

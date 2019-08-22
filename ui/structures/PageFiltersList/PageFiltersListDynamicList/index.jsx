import React from "react";
import PropTypes from "prop-types";

import DynamicList from "../../../components/DynamicList";

import PageFiltersListPagination from "./PageFiltersListPagination";
import StyledPageFiltersListDynamicList from "./StyledPageFiltersListDynamicList";

import { withPageFiltersListContext } from "../PageFiltersListContext";

export function PageFiltersListDynamicList({
  isFetching,
  totalCount,
  listRef,
  children,
  className,
}) {
  return (
    <StyledPageFiltersListDynamicList ref={listRef} className={className}>
      <DynamicList isLoading={isFetching}>{children}</DynamicList>
      <PageFiltersListPagination totalCount={totalCount} />
    </StyledPageFiltersListDynamicList>
  );
}

PageFiltersListDynamicList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  isFetching: PropTypes.bool.isRequired,
  totalCount: PropTypes.number.isRequired,
  listRef: PropTypes.object,
  className: PropTypes.string,
};

export default withPageFiltersListContext(PageFiltersListDynamicList);

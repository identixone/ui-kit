import React from "react";
import PropTypes from "prop-types";

import { ListLayoutListWrapper } from "./ListLayoutListWrapper";
import { StyledListLayoutList } from "./StyledListLayoutList";
import { ListLayoutNotice } from "../ListLayoutNotice";
import { ListLayoutListItem } from "./ListLayoutListItem";
import { ListLayoutListPagination } from "./ListLayoutListPagination";
import { ListLayoutListSpinner } from "./ListLayoutListSpinner";
import { Ban } from "../../icons";

function ListLayoutList({
  listRef,
  items,
  isLoading,
  renderItem,
  noItemsText,
  pagination,
  columns,
  className,
  "data-testid": testId,
  hasNext,
}) {
  const isListEmpty = hasNext === false && items.length === 0;
  const hasPagePagination = Boolean(pagination);

  return (
    <ListLayoutListWrapper data-testid={testId}>
      {!isLoading || !hasPagePagination ? (
        isListEmpty ? (
          <ListLayoutNotice
            icon={<Ban size="48" />}
            data-testid="empty-list-notice"
          >
            {noItemsText}
          </ListLayoutNotice>
        ) : (
          <React.Fragment>
            <StyledListLayoutList
              ref={listRef}
              columns={columns}
              className={className}
            >
              {items.map(renderItem)}
            </StyledListLayoutList>

            {pagination}
          </React.Fragment>
        )
      ) : (
        <ListLayoutListSpinner />
      )}
    </ListLayoutListWrapper>
  );
}

ListLayoutList.propTypes = {
  listRef: PropTypes.object,
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func,
  noItemsText: PropTypes.string,
  hasNext: PropTypes.bool.isRequired,
  pagination: PropTypes.object.isRequired,
  columns: PropTypes.oneOf([1, 2]),
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  "data-testid": PropTypes.string,
};

ListLayoutList.defaultProps = {
  items: [],
  renderItem: item => (
    <ListLayoutListItem key={item}>{item}</ListLayoutListItem>
  ),
  noItemsText: "No items",
  columns: 1,
};

ListLayoutList.Item = ListLayoutListItem;
ListLayoutList.Pagination = ListLayoutListPagination;

export {
  ListLayoutList,
  StyledListLayoutList,
  ListLayoutListItem,
  ListLayoutListPagination,
};

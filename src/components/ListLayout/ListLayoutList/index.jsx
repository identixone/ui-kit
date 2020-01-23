import React from "react";
import PropTypes from "prop-types";

import { ListLayoutListWrapper } from "./ListLayoutListWrapper";
import { StyledListLayoutList } from "./StyledListLayoutList";
import { ListLayoutNotice } from "../ListLayoutNotice";
import { ListLayoutListItem } from "./ListLayoutListItem";
import { ListLayoutListPagination } from "./ListLayoutListPagination";
import { ListLayoutListActions } from "./ListLayoutListActions";
import { ListLayoutListSpinner } from "./ListLayoutListSpinner";

import { Ban } from "../../../assets/icons";

function ListLayoutList({
  listRef,
  items,
  isLoading,
  renderItem,
  noItemsText,
  totalCount,
  actions,
  pagination,
  setPagination,
  columns,
  className,
  ...restProps
}) {
  return (
    <ListLayoutListWrapper data-testid={restProps["data-testid"]}>
      {!isLoading ? (
        totalCount === 0 ? (
          <ListLayoutNotice
            icon={<Ban size="48" />}
            data-testid="empty-list-notice"
          >
            {noItemsText}
          </ListLayoutNotice>
        ) : (
          <React.Fragment>
            {actions && actions}
            <StyledListLayoutList
              ref={listRef}
              columns={columns}
              className={className}
            >
              {items.map(renderItem)}
            </StyledListLayoutList>
            {pagination && (
              <ListLayoutListPagination
                totalCount={totalCount}
                pagination={pagination}
                setPagination={setPagination}
              />
            )}
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
  totalCount: PropTypes.number,
  actions: PropTypes.element,
  pagination: PropTypes.object.isRequired,
  setPagination: PropTypes.func.isRequired,
  columns: PropTypes.oneOf([1, 2]),
  className: PropTypes.string,
  isLoading: PropTypes.bool,
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
ListLayoutList.Actions = ListLayoutListActions;

export { ListLayoutList, StyledListLayoutList, ListLayoutListItem };

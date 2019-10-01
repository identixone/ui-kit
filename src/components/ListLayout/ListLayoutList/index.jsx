import React from "react";
import PropTypes from "prop-types";

import { ListLayoutListWrapper } from "./ListLayoutListWrapper";
import { StyledListLayoutList } from "./StyledListLayoutList";
import { ListLayoutNotice } from "../ListLayoutNotice";
import { ListLayoutListItem } from "./ListLayoutListItem";
import { ListLayoutListPagination } from "./ListLayoutListPagination";
import { ListLayoutListActions } from "./ListLayoutListActions";

import { Ban } from "../../../assets/icons";

function ListLayoutList({
  listRef,
  items,
  renderItem,
  noItemsText,
  totalCount,
  actions,
  pagination,
  setPagination,
}) {
  return (
    <ListLayoutListWrapper>
      {totalCount !== 0 ? (
        <React.Fragment>
          {actions && actions}
          <StyledListLayoutList rerf={listRef}>
            {items.map(renderItem)}
          </StyledListLayoutList>
          <ListLayoutListPagination
            totalCount={totalCount}
            pagination={pagination}
            setPagination={setPagination}
          />
        </React.Fragment>
      ) : (
        <ListLayoutNotice icon={<Ban size="48" />}>
          {noItemsText}
        </ListLayoutNotice>
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
};

ListLayoutList.defaultProps = {
  items: [],
  renderItem: item => <ListLayoutListItem>{item}</ListLayoutListItem>,
  noItemsText: "No items",
};

ListLayoutList.Item = ListLayoutListItem;
ListLayoutList.Actions = ListLayoutListActions;

export { ListLayoutList, StyledListLayoutList, ListLayoutListItem };

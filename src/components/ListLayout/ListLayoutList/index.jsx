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
  items,
  renderItem,
  noItemsText,
  totalCount,
  actions,
}) {
  return (
    <ListLayoutListWrapper centered={items.length === 0}>
      {items.length ? (
        <React.Fragment>
          {actions && actions}
          <StyledListLayoutList>{items.map(renderItem)}</StyledListLayoutList>
          <ListLayoutListPagination totalCount={totalCount} />
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
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  noItemsText: PropTypes.string,
  totalCount: PropTypes.number,
  actions: PropTypes.element,
};

ListLayoutList.defaultProps = {
  items: [],
  renderItem: item => <ListLayoutListItem>{item}</ListLayoutListItem>,
  noItemsText: "No items",
};

ListLayoutList.Item = ListLayoutListItem;
ListLayoutList.Actions = ListLayoutListActions;

export { ListLayoutList, StyledListLayoutList, ListLayoutListItem };

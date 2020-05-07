import React from "react";
import PropTypes from "prop-types";

import { StyledListLayoutListItem } from "./StyledListLayoutListItem";
import { ListLayoutListItemCheckbox } from "./ListLayoutListItemCheckbox";
import { ListLayoutListItemTitle } from "./ListLayoutListItemTitle";
import { ListLayoutListItemBadges } from "./ListLayoutListItemBadges";

function ListLayoutListItem({
  selectable,
  item,
  onChange,
  onClick,
  selected,
  children,
  badges,
  to,
  "data-testid": testId,
  "data-id": id,
}) {
  return (
    <StyledListLayoutListItem
      data-testid={testId}
      data-id={id}
      onClick={onClick}
    >
      {selectable && (
        <ListLayoutListItemCheckbox
          name={item}
          onChange={onChange}
          checked={selected}
        />
      )}
      <ListLayoutListItemTitle to={to}>{children}</ListLayoutListItemTitle>
      {badges && <ListLayoutListItemBadges>{badges}</ListLayoutListItemBadges>}
    </StyledListLayoutListItem>
  );
}

ListLayoutListItem.propTypes = {
  selectable: PropTypes.bool,
  item: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  badges: PropTypes.element,
  to: PropTypes.string,
  "data-testid": PropTypes.string,
  "data-id": PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export { ListLayoutListItem, StyledListLayoutListItem };

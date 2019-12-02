import React from "react";
import PropTypes from "prop-types";

import { StyledListLayoutListItem } from "./StyledListLayoutListItem";
import { ListLayoutListItemCheckbox } from "./ListLayoutListItemCheckbox";
import { ListLayoutListItemText } from "./ListLayoutListItemText";
import { ListLayoutListItemBadges } from "./ListLayoutListItemBadges";

function ListLayoutListItem({
  selectable,
  item,
  onChange,
  selected,
  children,
  badges,
  to,
  ...restProps
}) {
  return (
    <StyledListLayoutListItem data-testid={restProps["data-testid"]}>
      {selectable && (
        <ListLayoutListItemCheckbox
          name={item}
          onChange={onChange}
          checked={selected}
        />
      )}
      <ListLayoutListItemText to={to}>{children}</ListLayoutListItemText>
      {badges && <ListLayoutListItemBadges>{badges}</ListLayoutListItemBadges>}
    </StyledListLayoutListItem>
  );
}

ListLayoutListItem.propTypes = {
  selectable: PropTypes.bool,
  item: PropTypes.string,
  onChange: PropTypes.func,
  selected: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  badges: PropTypes.element,
  to: PropTypes.string,
  "data-testid": PropTypes.string,
};

ListLayoutListItem.defaultProps = { badges: [] };

export { ListLayoutListItem, StyledListLayoutListItem };

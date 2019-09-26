import React from "react";
import PropTypes from "prop-types";

import { StyledListLayoutListItem } from "./StyledListLayoutListItem";
import { ListLayoutListItemCheckbox } from "./ListLayoutListItemCheckbox";
import { ListLayoutListItemText } from "./ListLayoutListItemText";

export function ListLayoutListItem({
  selectable,
  item,
  onChange,
  selected,
  children,
  badges,
  to,
}) {
  return (
    <StyledListLayoutListItem>
      {selectable && (
        <ListLayoutListItemCheckbox
          name={item}
          onChange={onChange}
          value={selected}
        />
      )}
      <ListLayoutListItemText to={to}>{children}</ListLayoutListItemText>
      {badges}
    </StyledListLayoutListItem>
  );
}

ListLayoutListItem.propTypes = {
  selectable: PropTypes.bool,
  item: PropTypes.text,
  onChange: PropTypes.func,
  selected: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  badges: PropTypes.element,
  to: PropTypes.string,
};

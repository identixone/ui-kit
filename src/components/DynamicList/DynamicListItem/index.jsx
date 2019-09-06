import React from "react";
import PropTypes from "prop-types";

import StyledDynamicListItem from "./StyledDynamicListItem";

import DynamicListItemTitle from "./DynamicListItemTitle";
import DynamicListItemAdditional from "./DynamicListItemAdditional";
import DynamicListItemLink from "./DynamicListItemLink";

export function DynamicListItem({
  title,
  additional,
  isSelected,
  onClick,
  innerRef,
  children,
  className,
}) {
  return (
    <StyledDynamicListItem
      onClick={onClick}
      isSelected={isSelected}
      ref={innerRef}
      className={className}
    >
      {children ? (
        children
      ) : (
        <React.Fragment>
          <DynamicListItemTitle>{title}</DynamicListItemTitle>
          <DynamicListItemAdditional>{additional}</DynamicListItemAdditional>
        </React.Fragment>
      )}
    </StyledDynamicListItem>
  );
}

DynamicListItem.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
  additional: PropTypes.node,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  innerRef: PropTypes.object,
  className: PropTypes.string,
};

export { DynamicListItemTitle, DynamicListItemAdditional, DynamicListItemLink };

import React from "react";
import PropTypes from "prop-types";

import { StyledBreadcrumbsItem } from "./StyledBreadcrumbsItem";
import { BreadcrumbsItemText } from "./BreadcrumbsItemText";
import { BreadcrumbsItemIcon } from "./BreadcrumbsItemIcon";

function BreadcrumbsItem({
  children,
  isDisabled,
  onClick,
  isActive,
  ...restProps
}) {
  const onClickAllowed = !isDisabled && !isActive;

  return (
    <StyledBreadcrumbsItem
      isDisabled={isDisabled}
      isActive={isActive}
      onClick={onClickAllowed ? onClick : undefined}
      {...restProps}
    >
      <BreadcrumbsItemText>{children}</BreadcrumbsItemText>
      <BreadcrumbsItemIcon size="12" />
    </StyledBreadcrumbsItem>
  );
}

BreadcrumbsItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  isDisabled: PropTypes.bool,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export { BreadcrumbsItem, StyledBreadcrumbsItem };

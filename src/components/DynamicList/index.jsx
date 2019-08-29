import React from "react";
import PropTypes from "prop-types";

import StyledDynamicList from "./StyledDynamicList";

function DynamicList({ children, isLoading, innerRef }) {
  return (
    <StyledDynamicList isLoading={isLoading} ref={innerRef}>
      {children}
    </StyledDynamicList>
  );
}

DynamicList.propTypes = {
  children: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  innerRef: PropTypes.object,
};

export { DynamicList };
export {
  DynamicListItem,
  DynamicListItemTitle,
  DynamicListItemAdditional,
} from "./DynamicListItem";

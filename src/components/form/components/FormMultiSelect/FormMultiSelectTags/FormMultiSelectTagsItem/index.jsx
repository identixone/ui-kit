import React from "react";
import PropTypes from "prop-types";

import StyledFormMultiSelectTagsItem from "./StyledFormMultiSelectTagsItem";
import FormMultiSelectTagsItemTitle from "./FormMultiSelectTagsItemTitle";
import FormMultiSelectTagsItemCross from "./FormMultiSelectTagsItemCross";

function FormMultiSelectTagsItem({
  onCrossClick,
  title,
  "data-testid": testId,
}) {
  return (
    <StyledFormMultiSelectTagsItem data-testid={testId} role="tag">
      <FormMultiSelectTagsItemTitle>{title}</FormMultiSelectTagsItemTitle>
      <FormMultiSelectTagsItemCross
        onClick={onCrossClick}
        data-testid={`${testId}-cross`}
      />
    </StyledFormMultiSelectTagsItem>
  );
}

FormMultiSelectTagsItem.propTypes = {
  "data-testid": PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  onCrossClick: PropTypes.func.isRequired,
};

export default FormMultiSelectTagsItem;

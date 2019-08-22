import React from "react";
import PropTypes from "prop-types";

import StyledFormMultiSelectTagsItem from "./StyledFormMultiSelectTagsItem";
import FormMultiSelectTagsItemTitle from "./FormMultiSelectTagsItemTitle";
import FormMultiSelectTagsItemCross from "./FormMultiSelectTagsItemCross";

function FormMultiSelectTagsItem({ onCrossClick, title, name }) {
  return (
    <StyledFormMultiSelectTagsItem data-testid={`tag-${name}-${title}`}>
      <FormMultiSelectTagsItemTitle>{title}</FormMultiSelectTagsItemTitle>
      <FormMultiSelectTagsItemCross
        onClick={onCrossClick}
        data-testid={`tag-cross-${name}-${title}`}
      />
    </StyledFormMultiSelectTagsItem>
  );
}

FormMultiSelectTagsItem.propTypes = {
  name: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  onCrossClick: PropTypes.func.isRequired,
};

export default FormMultiSelectTagsItem;

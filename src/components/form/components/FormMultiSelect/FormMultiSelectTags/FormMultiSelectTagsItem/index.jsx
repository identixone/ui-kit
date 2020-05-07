import React from "react";
import PropTypes from "prop-types";

import { StyledFormMultiSelectTagsItem } from "./StyledFormMultiSelectTagsItem";
import { FormMultiSelectTagsItemTitle } from "./FormMultiSelectTagsItemTitle";
import { FormMultiSelectTagsItemRemoveButton } from "./FormMultiSelectTagsItemRemoveButton";
import { TimesDelete } from "../../../../../icons";

function FormMultiSelectTagsItem({
  onCrossClick,
  title,
  "data-testid": testId,
}) {
  return (
    <StyledFormMultiSelectTagsItem data-testid={testId} role="tag">
      <FormMultiSelectTagsItemTitle>{title}</FormMultiSelectTagsItemTitle>
      <FormMultiSelectTagsItemRemoveButton
        onClick={onCrossClick}
        data-testid={`${testId}-cross`}
      >
        <TimesDelete size={12} />
      </FormMultiSelectTagsItemRemoveButton>
    </StyledFormMultiSelectTagsItem>
  );
}

FormMultiSelectTagsItem.propTypes = {
  "data-testid": PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  onCrossClick: PropTypes.func.isRequired,
};

export { FormMultiSelectTagsItem };

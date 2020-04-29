import React from "react";
import PropTypes from "prop-types";

import { StyledInfoCardSelect } from "./StyledInfoCardSelect";
import { InfoCardSelectTag } from "./InfoCardSelectTag";

import { isArray } from "lodash-es";

function getItemAsAText(item) {
  return item.label || String(item);
}

function InfoCardSelect({ value }) {
  return isArray(value) ? (
    <StyledInfoCardSelect as="ul">
      {value.map((tag) => (
        <InfoCardSelectTag key={tag.value || tag}>
          {getItemAsAText(tag)}
        </InfoCardSelectTag>
      ))}
    </StyledInfoCardSelect>
  ) : (
    <StyledInfoCardSelect>
      {value && <InfoCardSelectTag>{getItemAsAText(value)}</InfoCardSelectTag>}
    </StyledInfoCardSelect>
  );
}

InfoCardSelect.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
  ]),
};

InfoCardSelect.defaultProps = {
  value: "",
};

export { InfoCardSelect };

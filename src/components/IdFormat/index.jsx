import React from "react";
import PropTypes from "prop-types";

import { Value } from "../Value";

import { hasProperty } from "../../utils/helpers";

const getShortId = id => id.split("-")[4];

export function IdFormat(props) {
  const hasIdInProps = hasProperty(props, "id");

  const { id, children } = props;
  const idToCompare = hasIdInProps ? id : children;

  return (
    <Value value={idToCompare}>
      {idToCompare ? getShortId(idToCompare) : null}
    </Value>
  );
}

IdFormat.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
};

import React from "react";
import PropTypes from "prop-types";

import { Value } from "../Value";

const getShortId = id => id.split("-")[4];

export function IdFormat(props) {
  const hasIdInProps = Object.prototype.hasOwnProperty.call(props, "id");

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

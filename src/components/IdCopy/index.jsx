import React from "react";
import PropTypes from "prop-types";

import { useCopyToClipboard } from "../../hooks";
import { useFlash } from "../Flash";

import { StyledIdCopy } from "./StyledIdCopy";
import { IdCopyIcon } from "./IdCopyIcon";
import { Value } from "../Value";

const getShortId = id => id.split("-")[4];

export function IdCopy(props) {
  const hasIdInProps = Object.prototype.hasOwnProperty.call(props, "id");

  const { children, id } = props;

  const localId = hasIdInProps ? id : children;

  const { flash, isFlashing } = useFlash();
  const [{ isCopyAvailable }, copyToClipboard] = useCopyToClipboard();

  function handleCopyClick(ev) {
    ev.stopPropagation();
    flash();
    copyToClipboard(localId);
  }

  return (
    <Value value={localId}>
      <StyledIdCopy onClick={handleCopyClick} isFlashing={isFlashing}>
        {getShortId(localId)}
        {isCopyAvailable && <IdCopyIcon width="15" />}
      </StyledIdCopy>
    </Value>
  );
}

IdCopy.propTypes = {
  id: PropTypes.string,
  children: PropTypes.string,
};

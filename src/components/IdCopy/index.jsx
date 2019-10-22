import React from "react";
import PropTypes from "prop-types";

import { useCopyToClipboard } from "../../hooks";
import { useFlash } from "../Flash";

import { StyledIdCopy } from "./StyledIdCopy";
import { IdCopyIcon } from "./IdCopyIcon";
import { IdFormat } from "../IdFormat";

export function IdCopy({ children, id }) {
  const localId = id || children;

  const { flash, isFlashing } = useFlash();
  const [{ isCopyAvailable }, copyToClipboard] = useCopyToClipboard();

  function handleCopyClick() {
    flash();
    copyToClipboard(localId);
  }

  return (
    <StyledIdCopy onClick={handleCopyClick} isFlashing={isFlashing}>
      <IdFormat>{localId}</IdFormat>
      {isCopyAvailable && <IdCopyIcon width="15" />}
    </StyledIdCopy>
  );
}

IdCopy.propTypes = {
  id: PropTypes.string,
  children: PropTypes.string,
};

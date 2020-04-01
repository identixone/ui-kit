import React from "react";
import PropTypes from "prop-types";

import { useCopyToClipboard } from "../../hooks";
import { useFlash } from "../Flash";
import { useEffect } from "react";

import { StyledIdCopy } from "./StyledIdCopy";
import { IdCopyIcon } from "./IdCopyIcon";
import { Value } from "../Value";

import { hasProperty } from "../../utils/helpers";

const getShortId = id => id.split("-")[4];

export function IdCopy(props) {
  const hasIdInProps = hasProperty(props, "id");

  const { children, id } = props;

  const localId = hasIdInProps ? id : children;

  const { flash, isFlashing } = useFlash();
  const [{ isCopyAvailable, isCopied }, copyToClipboard] = useCopyToClipboard();

  function handleCopyClick(ev) {
    ev.stopPropagation();
    copyToClipboard(localId);
  }

  useEffect(() => {
    if (isCopied) {
      flash();
    }
  }, [isCopied]);

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

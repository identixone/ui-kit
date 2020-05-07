import React from "react";
import PropTypes from "prop-types";

import { useEffect } from "react";
import { useCopyToClipboard } from "../../hooks";
import { useFlash } from "../Flash";

import { StyledCopyItem } from "./StyledCopyItem";
import { CopyItemIcon } from "./CopyItemIcon";

function CopyItem({
  children,
  value,
  onCopy,
  className,
  "data-testid": testId,
}) {
  const { flash, isFlashing } = useFlash();
  const [{ isCopyAvailable, isCopied }, copyToClipboard] = useCopyToClipboard();

  function handleCopyClick(ev) {
    const valueToCopy = value || children;
    ev.stopPropagation();
    copyToClipboard(valueToCopy);
  }

  useEffect(() => {
    if (isCopied) {
      flash();
      if (onCopy) {
        onCopy();
      }
    }
  }, [isCopied]);

  return (
    <StyledCopyItem
      className={className}
      onClick={handleCopyClick}
      isFlashing={isFlashing}
      data-testid={testId}
    >
      {children}
      {isCopyAvailable && <CopyItemIcon width="15" />}
    </StyledCopyItem>
  );
}

CopyItem.propTypes = {
  children: PropTypes.string.isRequired,
  value: PropTypes.string,
  onCopy: PropTypes.func,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
};

CopyItem.defaultProps = {
  "data-testid": "copy-item",
};

export { CopyItem, StyledCopyItem };

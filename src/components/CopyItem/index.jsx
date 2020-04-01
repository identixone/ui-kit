import React from "react";
import PropTypes from "prop-types";

import { useEffect } from "react";
import { useCopyToClipboard } from "@identixone/ui-kit/src/hooks";
import { useFlash } from "@identixone/ui-kit/src/components/Flash";

import { StyledCopyItem } from "./StyledCopyItem";
import { CopyItemIcon } from "./CopyItemIcon";

function CopyItem({ children, className, "data-testid": testId }) {
  const { flash, isFlashing } = useFlash();
  const [{ isCopyAvailable, isCopied }, copyToClipboard] = useCopyToClipboard();

  function handleCopyClick(ev) {
    ev.stopPropagation();
    copyToClipboard(children);
  }

  useEffect(() => {
    if (isCopied) {
      flash();
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
  className: PropTypes.string,
  "data-testid": PropTypes.string,
};

CopyItem.defaultProps = {
  "data-testid": "copy-item",
};

export { CopyItem };

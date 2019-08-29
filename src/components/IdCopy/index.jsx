import React from "react";
import PropTypes from "prop-types";

import { Flash } from "../Flash";
import { CopyItem } from "../CopyItem";
import IdCopyIcon from "./IdCopyIcon";
import StyledCopyContainer from "./StyledCopyContainer";

const getShortId = id => id.split("-")[4];

export function IdCopy({ id, defaultValue }) {
  return id ? (
    <Flash
      render={({ flash }) => {
        return (
          <CopyItem
            render={({ copyItemRef, copyData, isCopyAvailible }) => {
              const handleCopyClick = ev => {
                ev.stopPropagation();
                flash();
                copyData(ev);
              };

              return (
                <React.Fragment>
                  <Flash.Flashing>
                    <StyledCopyContainer onClick={handleCopyClick}>
                      {getShortId(id)}
                      {isCopyAvailible && <IdCopyIcon width="15" />}
                    </StyledCopyContainer>
                  </Flash.Flashing>
                  <input hidden ref={copyItemRef} defaultValue={id} />
                </React.Fragment>
              );
            }}
          />
        );
      }}
    />
  ) : (
    defaultValue
  );
}

IdCopy.propTypes = {
  id: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
};

IdCopy.defaultProps = {
  id: "",
  defaultValue: "-",
};

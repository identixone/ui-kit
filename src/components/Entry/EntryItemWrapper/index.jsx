import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import StyledEntry from "../StyledEntry";
import StyledRecCard from "../StyledRecCard";

import EntryAdditionalButtons from "../../EntryAdditionalButtons";
import { EntryAdditionalButton } from "../../EntryAdditionalButtons/EntryAdditionalButton";

const COLOR_CHANGE_RATE = 60; // seconds
let timer = null;

export function EntryItemWrapper({
  entry,
  live,
  active,
  onClick,
  push,
  updateCurrentEntryIdxid,
  deletePersonEntries,
  highlight,
  pointer,
  additionalButtons,
  children,
}) {
  const entryref = useRef();
  const [state, setState] = useState({
    actualColorMode: "default",
    colorMode: active ? "active" : "default",
    deleted: false,
  });

  function handleClick() {
    if (!state.deleted) {
      if (live) {
        onClick(entry.id);
      } else {
        const { idxid } = entry;
        updateCurrentEntryIdxid(idxid);
        idxid && push(`/entries/${idxid}/`);
      }
    }
  }

  function handleDelete(e) {
    const { id } = entry;
    deletePersonEntries(id);
    e.stopPropagation();
  }

  useEffect(() => {
    if (highlight) {
      if (timer) clearTimeout(timer);
      setState({
        colorMode: "new",
        actualColorMode: "new",
      });

      timer = setTimeout(() => {
        setState({
          colorMode: "default",
          actualColorMode: "default",
        });
      }, COLOR_CHANGE_RATE * 1000);
    }
  }, []);

  useEffect(() => {
    return {
      colorMode: active ? "active" : state.actualColorMode,
    };
  }, [active]);

  const { conf, idxid, deleted } = entry;

  const isInitialShow = !(conf === "nm") && !(conf === "det"); //TODO: перенести в пропс

  return (
    <StyledEntry
      data-testid="entry-item"
      data-idxid={idxid}
      ref={entryref}
      pointer={pointer && !deleted && isInitialShow}
      mode={"entries"}
      deleted={deleted}
      onClick={handleClick}
    >
      <ThemeProvider theme={{ mode: state.colorMode }}>
        <StyledRecCard>
          {children && children()}
          {additionalButtons && (
            <EntryAdditionalButtons>
              {!deleted && (
                <EntryAdditionalButton onClick={handleDelete}>
                  delete
                </EntryAdditionalButton>
              )}
            </EntryAdditionalButtons>
          )}
        </StyledRecCard>
      </ThemeProvider>
    </StyledEntry>
  );
}

EntryItemWrapper.defaultProps = {
  active: false,
  live: false,
  entry: {},
  pointer: true,
  additionalButtons: false,
};

EntryItemWrapper.propTypes = {
  entry: PropTypes.object.isRequired,
  children: PropTypes.func,
  live: PropTypes.bool,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  push: PropTypes.func,
  updateCurrentEntryIdxid: PropTypes.func,
  deletePersonEntries: PropTypes.func,
  highlight: PropTypes.bool,
  pointer: PropTypes.bool,
  additionalButtons: PropTypes.bool,
};

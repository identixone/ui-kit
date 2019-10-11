import React from "react";
import PropTypes from "prop-types";

import { StyledListLayout } from "./StyledListLayout";
import { ListLayoutHeader } from "./ListLayoutHeader";
import { ListLayoutTitle } from "./ListLayoutTitle";
import { ListLayoutButtons } from "./ListLayoutButtons";
import { ListLayoutSearch } from "./ListLayoutSearch";
import { ListLayoutContent } from "./ListLayoutContent";

export function ListLayout({ title, buttons, search, actions, content }) {
  const hasHeader = title || buttons;

  return (
    <StyledListLayout>
      {hasHeader && (
        <ListLayoutHeader>
          {title && <ListLayoutTitle level={1}>{title}</ListLayoutTitle>}
          {buttons && <ListLayoutButtons>{buttons}</ListLayoutButtons>}
        </ListLayoutHeader>
      )}

      {search && <ListLayoutSearch>{search}</ListLayoutSearch>}
      {actions && actions}
      {content && <ListLayoutContent>{content}</ListLayoutContent>}
    </StyledListLayout>
  );
}

ListLayout.propTypes = {
  title: PropTypes.string,
  buttons: PropTypes.element,
  search: PropTypes.element,
  actions: PropTypes.element,
  content: PropTypes.element,
};

export * from "./ListLayoutList";
export * from "./ListLayoutNotice";
export * from "./ListLayoutDetailed";

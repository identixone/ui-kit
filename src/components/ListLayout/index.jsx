import React from "react";
import PropTypes from "prop-types";

import { StyledListLayout } from "./StyledListLayout";
import { ListLayoutHeader } from "./ListLayoutHeader";
import { ListLayoutTitle } from "./ListLayoutTitle";
import { ListLayoutButtons } from "./ListLayoutButtons";
import { ListLayoutSearch } from "./ListLayoutSearch";
import { ListLayoutContent } from "./ListLayoutContent";
import { ListLayoutTop } from "./ListLayoutTop";

import { ListLayoutContext, ListLayoutProvider } from "./ListLayoutProvider";

function ListLayout({ title, buttons, search, actions, content, className }) {
  const hasHeader = title || buttons;
  const hasTop = hasHeader || search;

  return (
    <ListLayoutProvider>
      <StyledListLayout className={className}>
        {hasTop && (
          <ListLayoutTop>
            {hasHeader && (
              <ListLayoutHeader>
                {title && <ListLayoutTitle level={1}>{title}</ListLayoutTitle>}
                {buttons && <ListLayoutButtons>{buttons}</ListLayoutButtons>}
              </ListLayoutHeader>
            )}
            {search && <ListLayoutSearch>{search}</ListLayoutSearch>}
          </ListLayoutTop>
        )}

        {actions && actions}
        {content && <ListLayoutContent>{content}</ListLayoutContent>}
      </StyledListLayout>
    </ListLayoutProvider>
  );
}

ListLayout.propTypes = {
  title: PropTypes.string,
  buttons: PropTypes.element,
  search: PropTypes.element,
  actions: PropTypes.element,
  content: PropTypes.element,
  className: PropTypes.string,
};

export * from "./ListLayoutList";
export * from "./ListLayoutNotice";
export * from "./ListLayoutDetailed";
export * from "./ListLayoutActions";
export { ListLayout };
export { ListLayoutContext, ListLayoutProvider };

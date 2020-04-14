import React from "react";
import PropTypes from "prop-types";

import { useState, useMemo, useEffect } from "react";
import { createContext } from "react";

import { StyledListLayout } from "./StyledListLayout";
import { ListLayoutHeader } from "./ListLayoutHeader";
import { ListLayoutTitle } from "./ListLayoutTitle";
import { ListLayoutButtons } from "./ListLayoutButtons";
import { ListLayoutSearch } from "./ListLayoutSearch";
import { ListLayoutContent } from "./ListLayoutContent";
import { ListLayoutTop } from "./ListLayoutTop";

import { identity } from "lodash-es";

const ListLayoutContext = createContext({
  isHeaderFull: false,
  setIsHeaderFull: identity,
  headerHeight: 80,
  /**
   * Смещение фильтров для того, чтобы элементы не заезжали
   * под хедер приложения, когда она прилеплен к верху
   */
  appHeaderOffset: 0,
  setAppHeaderOffset: identity,
});

function ListLayout({
  title,
  buttons,
  search,
  actions,
  content,
  className,
  headerHeight,
}) {
  const [isHeaderFull, setIsHeaderFull] = useState(false);
  const [appHeaderOffset, setAppHeaderOffset] = useState(0);
  const store = useMemo(
    () => ({
      isHeaderFull,
      setIsHeaderFull,
      headerHeight,
      appHeaderOffset,
    }),
    [isHeaderFull, headerHeight, appHeaderOffset]
  );
  useEffect(() => {
    setAppHeaderOffset(isHeaderFull ? headerHeight : 0);
  }, [isHeaderFull]);

  const hasHeader = title || buttons;
  const hasTop = hasHeader || search;

  return (
    <ListLayoutContext.Provider value={store}>
      <StyledListLayout className={className}>
        {hasTop && (
          <ListLayoutTop headerHeight={headerHeight}>
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
    </ListLayoutContext.Provider>
  );
}

ListLayout.propTypes = {
  title: PropTypes.string,
  buttons: PropTypes.element,
  search: PropTypes.element,
  actions: PropTypes.element,
  content: PropTypes.element,
  className: PropTypes.string,
  headerHeight: PropTypes.number,
};

ListLayout.defaultProps = {
  headerHeight: 80,
};

export * from "./ListLayoutList";
export * from "./ListLayoutNotice";
export * from "./ListLayoutDetailed";
export * from "./ListLayoutActions";
export { ListLayout };
export { ListLayoutContext };

import React from "react";
import PropTypes from "prop-types";

import { useMemo, useEffect, useState } from "react";
import { createContext } from "react";

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

function getHeaderHeight(headerEl) {
  return headerEl ? headerEl.getBoundingClientRect().height : 0;
}

function ListLayoutProvider({ children }) {
  const [isHeaderFull, setIsHeaderFull] = useState(false);
  const [appHeaderOffset, setAppHeaderOffset] = useState(0);

  const store = useMemo(
    () => ({
      isHeaderFull,
      setIsHeaderFull,
      headerHeight: getHeaderHeight(document.querySelector("header")),
      appHeaderOffset,
    }),
    [isHeaderFull, appHeaderOffset]
  );
  useEffect(() => {
    setAppHeaderOffset(isHeaderFull ? store.headerHeight : 0);
  }, [isHeaderFull]);

  return (
    <ListLayoutContext.Provider value={store}>
      {children}
    </ListLayoutContext.Provider>
  );
}

ListLayoutProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
};

export { ListLayoutProvider, ListLayoutContext };

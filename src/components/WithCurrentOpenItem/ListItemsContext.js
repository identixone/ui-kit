import React from "react";

export const ListItemsContext = React.createContext({
  currentOpenItem: null,
  setCurrentOpenItem: () => {},
});

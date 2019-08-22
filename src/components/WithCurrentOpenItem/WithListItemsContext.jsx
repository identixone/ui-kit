import React from "react";

import { ListItemsContext } from "./ListItemsContext";

const WithListItemsContext = Component => {
  function WithCurrentItemComponent(props) {
    return (
      <ListItemsContext.Consumer>
        {({ currentOpenItem, setCurrentOpenItem }) => (
          <Component
            {...props}
            currentOpenItem={currentOpenItem}
            setCurrentOpenItem={setCurrentOpenItem}
          />
        )}
      </ListItemsContext.Consumer>
    );
  }

  return WithCurrentItemComponent;
};

export default WithListItemsContext;

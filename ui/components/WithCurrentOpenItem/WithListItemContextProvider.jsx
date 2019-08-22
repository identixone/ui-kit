import React from "react";

import { ListItemsContext } from "./ListItemsContext";

const WithListItemContextProvider = Component => {
  class WithCurrentItemComponent extends React.Component {
    state = {
      currentOpenItem: null,
    };

    setCurrentOpenItem = currentOpenItem => {
      this.setState({ currentOpenItem });
    };

    render() {
      return (
        <ListItemsContext.Provider
          value={{
            currentOpenItem: this.state.currentOpenItem,
            setCurrentOpenItem: this.setCurrentOpenItem,
          }}
        >
          <Component {...this.props} />
        </ListItemsContext.Provider>
      );
    }
  }

  return WithCurrentItemComponent;
};

export default WithListItemContextProvider;

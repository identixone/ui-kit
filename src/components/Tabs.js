import React, { Component } from "react";
import PropTypes from "prop-types";

import { toggleInArray } from "../utils/helpers";
import { noop } from "lodash-es";

const TabsContext = React.createContext({
  activeTab: null,
  openTab: () => {},
  disabledTabs: [],
  toggleDisabled: () => {},
});

const withTabsContext = (WrappedComponent) => {
  const WithTabsContext = (props) => (
    <TabsContext.Consumer>
      {(context) => <WrappedComponent {...props} {...context} />}
    </TabsContext.Consumer>
  );

  return WithTabsContext;
};

const TabBar = ({ children, className, ...restProps }) => (
  <div className={className} {...restProps}>
    {children}
  </div>
);

TabBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};

const TabBarItem = ({ id, render }) => (
  <TabsContext.Consumer>
    {({ activeTab, openTab, disabledTabs }) => {
      return render({
        isActive: id === activeTab,
        isDisabled: disabledTabs.includes(id),
        onClick: () => openTab(id),
      });
    }}
  </TabsContext.Consumer>
);

TabBarItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  render: PropTypes.func.isRequired,
};

const TabPanes = ({ children }) => children;

const TabPane = ({ id, render }) => (
  <TabsContext.Consumer>
    {({ activeTab }) => {
      return render({
        isActive: id === activeTab,
      });
    }}
  </TabsContext.Consumer>
);

TabPane.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  render: PropTypes.func,
};

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
    defaultActiveTab: PropTypes.string,
    disabledTabs: PropTypes.array,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    disabledTabs: [],
    onChange: noop,
  };

  static TabBar = TabBar;
  static TabBarItem = TabBarItem;

  static TabPanes = TabPanes;
  static TabPane = TabPane;

  componentDidUpdate(_, prevState) {
    if (prevState !== this.state) {
      this.props.onChange(this.state);
    }
  }

  openTab = (tabName) => {
    this.setState(({ disabledTabs }) => ({
      activeTab: tabName,
      disabledTabs: disabledTabs.filter((tab) => tab !== tabName),
    }));
  };

  toggleDisabled = (tabName) => {
    this.setState(({ disabledTabs }) => ({
      disabledTabs: toggleInArray(disabledTabs, tabName),
    }));
  };

  disableTab = (tabName) => {
    this.setState(({ disabledTabs }) => ({
      disabledTabs: disabledTabs.concat(tabName),
    }));
  };

  state = {
    activeTab: this.props.defaultActiveTab,
    openTab: this.openTab,
    disabledTabs: this.props.disabledTabs,
    disableTab: this.disableTab,
    toggleDisabled: this.toggleDisabled,
  };

  render() {
    return (
      <TabsContext.Provider value={this.state}>
        {this.props.children}
      </TabsContext.Provider>
    );
  }
}

export { Tabs, TabsContext, withTabsContext };

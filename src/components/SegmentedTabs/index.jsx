import React from "react";
import PropTypes from "prop-types";

import { SegmentedTabsTabbar } from "./SegmentedTabsTabbar";
import { SegmentedTabsSpinner } from "./SegmentedTabsSpinner";
import { Tabs } from "../Tabs";
const { TabPanes, TabPane } = Tabs;

function SegmentedTabs({
  options,
  defaultActiveTab,
  onChange,
  "data-testid": testId,
  className,
}) {
  function renderTabPane(option) {
    const { value, Component } = option;

    return (
      <TabPane
        id={value}
        // eslint-disable-next-line react/prop-types
        render={props => props.isActive && <Component {...props} />}
      />
    );
  }

  return (
    <div className={className}>
      <Tabs defaultActiveTab={defaultActiveTab} onChange={onChange}>
        <SegmentedTabsTabbar
          options={options}
          data-testid={`${testId}-tabbar`}
        />
        <TabPanes>{options.map(renderTabPane)}</TabPanes>
      </Tabs>
    </div>
  );
}

SegmentedTabs.propTypes = {
  options: PropTypes.array.isRequired,
  defaultActiveTab: PropTypes.string,
  onChange: PropTypes.func,
  "data-testid": PropTypes.string,
  className: PropTypes.string,
};

export { SegmentedTabs, SegmentedTabsTabbar, SegmentedTabsSpinner };

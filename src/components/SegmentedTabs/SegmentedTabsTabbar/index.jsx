import React from "react";
import PropTypes from "prop-types";

import { useContext } from "react";
import { TabsContext } from "../../Tabs";

import { StyledSegmentedTabsTabbar } from "./StyledSegmentedTabsTabbar";
import { Button } from "../../Button";

function SegmentedTabsTabbar({ options, "data-testid": testId, className }) {
  const { openTab, activeTab } = useContext(TabsContext);

  function renderTabBarItem(option) {
    const { label, value } = option;

    function getButtonTheme(buttonName) {
      return activeTab === buttonName ? "dark" : "light";
    }

    return (
      <Button
        data-testid={`${testId}-${value}`}
        theme={getButtonTheme(value)}
        onClick={() => {
          openTab(value);
        }}
      >
        {label}
      </Button>
    );
  }

  return (
    <StyledSegmentedTabsTabbar className={className}>
      {options.map(renderTabBarItem)}
    </StyledSegmentedTabsTabbar>
  );
}

SegmentedTabsTabbar.propTypes = {
  options: PropTypes.array.isRequired,
  "data-testid": PropTypes.string,
  className: PropTypes.string,
};

export { SegmentedTabsTabbar, StyledSegmentedTabsTabbar };

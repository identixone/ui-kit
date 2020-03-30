import React from "react";

import { useContext } from "react";

import { TabsContext } from "@identixone/ui-kit/src/components/Tabs";

import { StyledEntriesDateTimeFilterTabsTabbar } from "./StyledEntriesDateTimeFilterTabsTabbar";
import { EntriesDateTimeFilterTabsTabbarButton } from "./EntriesDateTimeFilterTabsTabbarButton";

function EntriesDateTimeFilterTabsTabbar() {
  const { openTab, activeTab } = useContext(TabsContext);

  return (
    <StyledEntriesDateTimeFilterTabsTabbar>
      <EntriesDateTimeFilterTabsTabbarButton
        data-testid="entries-date-time-absolute"
        isActive={activeTab === "absolute"}
        onClick={() => {
          openTab("absolute");
        }}
      >
        Absolute
      </EntriesDateTimeFilterTabsTabbarButton>
      <EntriesDateTimeFilterTabsTabbarButton
        data-testid="entries-date-time-relative"
        isActive={activeTab === "relative"}
        onClick={() => {
          openTab("relative");
        }}
      >
        Relative
      </EntriesDateTimeFilterTabsTabbarButton>
    </StyledEntriesDateTimeFilterTabsTabbar>
  );
}

export { EntriesDateTimeFilterTabsTabbar };

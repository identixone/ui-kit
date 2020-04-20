import React from "react";

import { Tabs } from "../../../Tabs";
import { EntriesDateTimeFilterTabsTabbar } from "./EntriesDateTimeFilterTabsTabbar";
import { EntriesDateTimeFilterTabsInner } from "./EntriesDateTimeFilterTabsInner";
import { EntriesDateTimeFilterAbsolute } from "../EntriesDateTimeFilterAbsolute";
import { EntriesDateTimeFilterRelative } from "../EntriesDateTimeFilterRelative";
import { StyledEntriesDateTimeFilterTabs } from "./StyledEntriesDateTimeFilterTabs";

const { TabPanes, TabPane } = Tabs;

function EntriesDateTimeFilterTabs() {
  return (
    <StyledEntriesDateTimeFilterTabs>
      <Tabs defaultActiveTab="absolute">
        <EntriesDateTimeFilterTabsTabbar />
        <EntriesDateTimeFilterTabsInner>
          <TabPanes>
            <TabPane
              id="absolute"
              render={(props) =>
                // eslint-disable-next-line react/prop-types
                props.isActive && <EntriesDateTimeFilterAbsolute {...props} />
              }
            />
            <TabPane
              id="relative"
              render={(props) =>
                // eslint-disable-next-line react/prop-types
                props.isActive && <EntriesDateTimeFilterRelative {...props} />
              }
            />
          </TabPanes>
        </EntriesDateTimeFilterTabsInner>
      </Tabs>
    </StyledEntriesDateTimeFilterTabs>
  );
}

export { EntriesDateTimeFilterTabs };

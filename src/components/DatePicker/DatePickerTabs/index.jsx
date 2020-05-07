import React from "react";

import { Tabs } from "../../Tabs";
import { DatePickerTabsTabbar } from "./DatePickerTabsTabbar";
import { DatePickerTabsInner } from "./DatePickerTabsInner";
import { DatePickerAbsolute } from "../DatePickerAbsolute";
import { DatePickerRelative } from "../DatePickerRelative";
import { StyledDatePickerTabs } from "./StyledDatePickerTabs";

const { TabPanes, TabPane } = Tabs;

function DatePickerTabs() {
  return (
    <StyledDatePickerTabs>
      <Tabs defaultActiveTab="absolute">
        <DatePickerTabsTabbar />
        <DatePickerTabsInner>
          <TabPanes>
            <TabPane
              id="absolute"
              render={(props) =>
                // eslint-disable-next-line react/prop-types
                props.isActive && <DatePickerAbsolute {...props} />
              }
            />
            <TabPane
              id="relative"
              render={(props) =>
                // eslint-disable-next-line react/prop-types
                props.isActive && <DatePickerRelative {...props} />
              }
            />
          </TabPanes>
        </DatePickerTabsInner>
      </Tabs>
    </StyledDatePickerTabs>
  );
}

export { DatePickerTabs };

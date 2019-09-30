import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import { ListLayout } from "./index.jsx";
import { Search } from "../Search";
import { Button } from "../Button";
import { Sync } from "../../assets/icons";
import { ListLayoutList } from "./ListLayoutList";
import { SelectableList } from "../SelectableList";

storiesOf("List Layout", module).add("full view", () => {
  const options = [
    "Leonardo-8bbd",
    "Raphael-8bb9",
    "Donatello-8bb10",
    "Michelangelo-8bb10",
    "Splinter-8bb10",
    "April O'Neil-8bb10",
    "Casey Jones-8bb10",
  ];

  function ListLayoutConsumer() {
    const [searchQuery, setSearchQuery] = useState("");

    function handleSearchChange({ target: { value } }) {
      setSearchQuery(value);
    }

    return (
      <ListLayout
        title="Some title"
        buttons={
          <React.Fragment>
            <Button buttonTheme="dark" size="large">
              Add list
            </Button>
            <Button fit="square" size="large">
              <Sync size="16" />
            </Button>
          </React.Fragment>
        }
        search={
          <Search
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Enter search query..."
          />
        }
        content={
          <React.Fragment>
            <SelectableList options={options}>
              {({
                selected,
                handleCheckboxChange,
                options,
                selectAll,
                deselectAll,
                isAllSelected,
              }) => (
                <ListLayoutList
                  items={options}
                  noItemsText="No items found"
                  totalCount={20}
                  actions={
                    <ListLayoutList.Actions
                      onSelect={selectAll}
                      onDeselect={deselectAll}
                      isSelectAvailable={!isAllSelected}
                      isDeselectAvailable={selected.length !== 0}
                    >
                      {selected.length !== 0 &&
                        `Items selected: ${selected.length}`}
                    </ListLayoutList.Actions>
                  }
                  renderItem={item => (
                    <ListLayoutList.Item
                      selectable={true}
                      item={item}
                      onChange={handleCheckboxChange}
                      selected={selected.includes(item)}
                    >
                      {item}
                    </ListLayoutList.Item>
                  )}
                />
              )}
            </SelectableList>

            <div>some</div>
            {/* <ListLayoutList items={[]} noItemsText="No items found" /> */}
          </React.Fragment>
        }
      />
    );
  }

  return <ListLayoutConsumer />;
});

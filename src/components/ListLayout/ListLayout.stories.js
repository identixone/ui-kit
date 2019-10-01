import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { useListFetch } from "../../hooks";

import { ListLayout } from "./index.jsx";
import { Search } from "../Search";
import { Button } from "../Button";
import { Sync } from "../../assets/icons";
import { ListLayoutList } from "./ListLayoutList";
import { SelectableList } from "../SelectableList";

import { PersonsListListPerson } from "../PersonsList/PersonsListListPerson/index";

import { searchTypes } from "../PersonsList/PersonsListListPerson/PersonsListListPersonTypeSelect";

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

  const optionsCount = number("List items count", 20);

  function ListLayoutConsumer() {
    const {
      pagination,
      setPagination,

      searchQuery,
      setSearchQuery,

      fetchListWithParams,
    } = useListFetch({
      fetchList: action("Fetch list"),
    });

    const [searchType, setSearchType] = useState(searchTypes[0]);

    function handleSearchChange({ target: { value } }) {
      setSearchQuery(value);
    }

    function handleUpdateClick() {
      fetchListWithParams();
    }

    return (
      <ListLayout
        title="Some title"
        buttons={
          <React.Fragment>
            <Button buttonTheme="dark" size="large">
              Add list
            </Button>
            <Button fit="square" size="large" onClick={handleUpdateClick}>
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
                  totalCount={optionsCount}
                  pagination={pagination}
                  setPagination={setPagination}
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
                      {item}isRequired
                    </ListLayoutList.Item>
                  )}
                />
              )}
            </SelectableList>

            <PersonsListListPerson
              person={{
                photo:
                  "https://pbs.twimg.com/profile_images/438441330302140416/o8Yv7bwr_400x400.jpeg",
                idxid: "732e7919-508d-4cc2-b5a5-3e1b863c7d33",
              }}
              searchType={searchType}
              onSearchTypeChange={setSearchType}
            />
          </React.Fragment>
        }
      />
    );
  }

  return <ListLayoutConsumer />;
});

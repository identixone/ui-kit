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
import { PersonsListPerson } from "../PersonsList/PersonsListPerson/index";

import { property as prop } from "lodash-es";

const names = [
  "Leonardo",
  "Raphael",
  "Donatello",
  "Michelangelo",
  "Splinter",
  "April O'Neil",
  "Casey Jones",
  "Hamato Yoshi",
  "Venus de Milo",
  "Mighty Mutanimals",
  "Metalhead",
  "Mutagen Man",
  "Ninjara",
  "Fugitoid",
  "Tang Shen",
  "Kirby O'Neil",
  "Mrs. O'Neil",
  "Aka",
  "Gothano",
  "Toad Baron",
  "Allies",
  "Al'Falqa",
  "Punk Frogs",
  "Renet Tilley",
  "Tattoo",
  "The Warrior Dragon",
  "Angel",
  "Antagonists",
  "Foot Clan",
  "Krang",
  "Ch'rell",
  "Lord Dregg",
  "Hi-Tech",
  "Titanus",
  "Purple Dragons",
  "Rat King",
  "Bishop",
  "Yaotl's Brotherhood",
  "Dragonlord",
  "Go Komodo",
  "King Komodo",
  "Savanti Romero",
  "Null",
  "Maligna",
  "Adversary",
  "Chi-you",
  "Triceratons",
  "The Dragon",
  "Darrius Dun",
  "Street Phantoms",
  "Jammerhead",
  "Mutants",
  "Ace Duck",
  "Alopex",
  "Armaggon",
  "Bloodsucker",
  "Dale McGillicutty",
  "Groundchuck and Dirtbag",
  "Doctor El",
  "Halfcourt",
  "Herman",
  "Hothead",
  "Hot Spot",
  "King Lionheart",
  "Manmoth",
  "Mona Lisa",
  "Monty Moose",
  "Muckman",
  "Old Hob",
  "Pete",
  "Perri Grey",
  "Pizza Face",
  "Sandstorm",
  "Sally Pride",
  "Scrag",
  "Scratch",
  "Sergeant Bananas",
  "Scumbug",
  "Uncanny Trio",
  "Verminator-X",
  "Walkabout",
  "Wyrm",
];

function getOptions(count) {
  return names.slice(0, count);
}

storiesOf("List Layout", module)
  .add("full view one column", () => {
    const options = getOptions(10);
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
                        badges={
                          <ListLayoutList.Item.Badge color="#1e8ab8">
                            included
                          </ListLayoutList.Item.Badge>
                        }
                      >
                        {item}
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
  })
  .add("full view two columns", () => {
    const options = getOptions(20);

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
                    columns={2}
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
                        badges={
                          <ListLayoutList.Item.Badge color="#1e8ab8">
                            included
                          </ListLayoutList.Item.Badge>
                        }
                      >
                        {item}
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
  })
  .add("list of persons", () => {
    const persons = (count =>
      [...new Array(count)].map((_, id) => ({
        idxid: "732e7919-508d-4cc2-b5a5-3e1b863c7d33" + id,
        idxid_source: {
          id: 133971,
          name: "Default_is_a_long value goes heree",
        },
        initial_photo:
          "https://pbs.twimg.com/profile_images/438441330302140416/o8Yv7bwr_400x400.jpeg",
      })))(10);

    const optionsCount = number("List items count", 20);

    function ListLayoutConsumer() {
      const {
        pagination,
        setPagination,

        searchQuery,
        setSearchQuery,
      } = useListFetch({
        fetchList: action("Fetch list"),
      });

      const [searchType, setSearchType] = useState(searchTypes[0]);
      const [detailed, setDetailed] = useState(null);

      function handleSearchChange({ target: { value } }) {
        setSearchQuery(value);
      }

      console.log({ detailed });

      return (
        <SelectableList options={persons.map(prop("idxid"))}>
          {({
            selected,
            handleCheckboxChange,
            selectAll,
            deselectAll,
            isAllSelected,
            isAllDeselected,
          }) => (
            <ListLayout
              search={
                <Search
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Enter search query..."
                />
              }
              actions={
                <ListLayoutList.Actions
                  onSelect={selectAll}
                  onDeselect={deselectAll}
                  isSelectAvailable={!isAllSelected}
                  isDeselectAvailable={!isAllDeselected}
                  additional={
                    <Button
                      buttonTheme="outline-accent"
                      isDisabled={isAllDeselected}
                    >
                      Remove selected
                    </Button>
                  }
                >
                  {selected.length !== 0
                    ? `${selected.length} persons selected`
                    : "No person selected"}
                </ListLayoutList.Actions>
              }
              content={
                <React.Fragment>
                  <ListLayoutList
                    items={persons}
                    noItemsText="No items found"
                    totalCount={optionsCount}
                    pagination={pagination}
                    setPagination={setPagination}
                    columns={2}
                    renderItem={person => (
                      <PersonsListPerson
                        key={person.idxid}
                        onChange={handleCheckboxChange}
                        onClick={setDetailed}
                        isSelected={selected.includes(person.idxid)}
                        person={person}
                      />
                    )}
                  />

                  <PersonsListListPerson
                    error={{}}
                    searchType={searchType}
                    onSearchTypeChange={setSearchType}
                  />
                </React.Fragment>
              }
            />
          )}
        </SelectableList>
      );
    }

    return <ListLayoutConsumer />;
  });

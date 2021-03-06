import React, { useState } from "react";

import { storiesOf } from "@storybook/react";
import { number, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { useListFetch } from "../../hooks";

import { ListLayout, ListLayoutList } from "./index.jsx";

import {
  PersonsGroupListPerson,
  PersonsGroupPerson,
  PersonsGroupPersonDetail,
  personsGroupsSearchTypes,
} from "../PersonsGroup";

import { Search } from "../Search";
import { Button } from "../Button";
import { SelectableList } from "../SelectableList";
import { UIBadge } from "../UIBadge";

import { Sync } from "../../assets/icons";

import { property as prop } from "lodash-es";
import { personMock } from "../../../test/__mocks__";

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
    const isLoading = boolean("is loading", false);

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

      const [searchType, setSearchType] = useState(personsGroupsSearchTypes[0]);

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
                    isLoading={isLoading}
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
                        badges={<UIBadge>included</UIBadge>}
                      >
                        {item}
                      </ListLayoutList.Item>
                    )}
                  />
                )}
              </SelectableList>

              <PersonsGroupListPerson
                person={personMock}
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

      const [searchType, setSearchType] = useState(personsGroupsSearchTypes[0]);

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
                        badges={<UIBadge>included</UIBadge>}
                      >
                        {item}
                      </ListLayoutList.Item>
                    )}
                  />
                )}
              </SelectableList>

              <PersonsGroupListPerson
                person={personMock}
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
        ...personMock,
        idxid: "732e7919-508d-4cc2-b5a5-3e1b863c7d33" + id,
        initial_facesize: 4095 * id,
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

      const [detailed, setDetailed] = useState(null);

      function handleSearchChange({ target: { value } }) {
        setSearchQuery(value);
      }

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
                      <PersonsGroupPerson
                        key={person.idxid}
                        onChange={handleCheckboxChange}
                        onClick={setDetailed}
                        isSelected={selected.includes(person.idxid)}
                        person={person}
                      />
                    )}
                  />

                  <PersonsGroupPersonDetail
                    person={persons.find(person => person.idxid === detailed)}
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

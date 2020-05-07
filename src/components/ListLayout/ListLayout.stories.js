import React, { useState } from "react";

import { storiesOf } from "@storybook/react";
import { number, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { useListFetch, useSelectableList } from "../../hooks";

import { ListLayout, ListLayoutList, ListLayoutActions } from "./index.jsx";

import {
  PersonsGroupListPerson,
  PersonsGroupPerson,
  PersonsGroupPersonDetail,
  personsGroupsSearchTypes,
} from "../PersonsGroup";

import { Search } from "../Search";
import { Button } from "../Button";
import { UIBadge } from "../UIBadge";

import { Sync } from "../icons";

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
      const {
        selected,
        onCheckboxChange,
        selectAll,
        deselectAll,
        isAllSelected,
        isAllDeselected,
      } = useSelectableList({ options });

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
              <Button theme="dark" size="large">
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
          actions={
            <ListLayoutActions
              selectAll={deselectAll}
              deselectAll={selectAll}
              isAllSelected={isAllSelected}
              additional={
                <Button
                  theme="dark"
                  isDisabled={isAllDeselected}
                  onClick={deselectAll}
                >
                  Remove selected
                </Button>
              }
            >
              {selected.length !== 0 && `${selected.length} items selected`}
            </ListLayoutActions>
          }
          content={
            <React.Fragment>
              <ListLayoutList
                items={options}
                noItemsText="No items found"
                pagination={
                  <ListLayoutList.Pagination
                    pagination={pagination}
                    setPagination={setPagination}
                    totalCount={optionsCount}
                  />
                }
                isLoading={isLoading}
                actions={
                  <ListLayoutActions
                    onSelect={selectAll}
                    onDeselect={deselectAll}
                    isSelectAvailable={!isAllSelected}
                    isDeselectAvailable={selected.length !== 0}
                  >
                    {selected.length !== 0 &&
                      `Items selected: ${selected.length}`}
                  </ListLayoutActions>
                }
                renderItem={(item) => (
                  <ListLayoutList.Item
                    selectable={true}
                    item={item}
                    onChange={onCheckboxChange}
                    selected={selected.includes(item)}
                    badges={<UIBadge>included</UIBadge>}
                  >
                    {item}
                  </ListLayoutList.Item>
                )}
              />

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
      const {
        selected,
        onCheckboxChange,
        selectAll,
        deselectAll,
        isAllSelected,
        isAllDeselected,
      } = useSelectableList({ options });

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
              <Button theme="dark" size="large">
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
          actions={
            <ListLayoutActions
              selectAll={deselectAll}
              deselectAll={selectAll}
              isAllSelected={isAllSelected}
              additional={
                <Button
                  theme="dark"
                  isDisabled={isAllDeselected}
                  onClick={deselectAll}
                >
                  Remove selected
                </Button>
              }
            >
              {selected.length !== 0 && `${selected.length} items selected`}
            </ListLayoutActions>
          }
          content={
            <React.Fragment>
              <ListLayoutList
                items={options}
                noItemsText="No items found"
                pagination={
                  <ListLayoutList.Pagination
                    pagination={pagination}
                    setPagination={setPagination}
                    totalCount={optionsCount}
                  />
                }
                columns={2}
                actions={
                  <ListLayoutActions
                    selectAll={deselectAll}
                    deselectAll={selectAll}
                    isAllSelected={isAllSelected}
                    additional={
                      <Button
                        theme="dark"
                        isDisabled={isAllDeselected}
                        onClick={deselectAll}
                      >
                        Remove selected
                      </Button>
                    }
                  >
                    {selected.length !== 0 &&
                      `${selected.length} items selected`}
                  </ListLayoutActions>
                }
                renderItem={(item) => (
                  <ListLayoutList.Item
                    selectable={true}
                    item={item}
                    onChange={onCheckboxChange}
                    selected={selected.includes(item)}
                    badges={<UIBadge>included</UIBadge>}
                  >
                    {item}
                  </ListLayoutList.Item>
                )}
              />

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
    const persons = ((count) =>
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
      const {
        selected,
        onCheckboxChange,
        selectAll,
        deselectAll,
        isAllDeselected,
        isAllSelected,
      } = useSelectableList({ options: persons.map(prop("idxid")) });

      const [detailed, setDetailed] = useState(null);

      function handleSearchChange({ target: { value } }) {
        setSearchQuery(value);
      }

      return (
        <ListLayout
          search={
            <Search
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Enter search query..."
            />
          }
          actions={
            <ListLayoutActions
              selectAll={deselectAll}
              deselectAll={selectAll}
              isAllSelected={isAllSelected}
              additional={
                <Button
                  theme="dark"
                  isDisabled={isAllDeselected}
                  onClick={deselectAll}
                >
                  Remove selected
                </Button>
              }
            >
              {selected.length !== 0 && `${selected.length} items selected`}
            </ListLayoutActions>
          }
          content={
            <React.Fragment>
              <ListLayoutList
                items={persons}
                noItemsText="No items found"
                pagination={
                  <ListLayoutList.Pagination
                    pagination={pagination}
                    setPagination={setPagination}
                    totalCount={optionsCount}
                  />
                }
                columns={2}
                renderItem={(person) => (
                  <PersonsGroupPerson
                    key={person.idxid}
                    onChange={onCheckboxChange}
                    onClick={setDetailed}
                    isSelected={selected.includes(person.idxid)}
                    person={person}
                  />
                )}
              />

              <PersonsGroupPersonDetail
                person={persons.find((person) => person.idxid === detailed)}
              />
            </React.Fragment>
          }
        />
      );
    }

    return <ListLayoutConsumer />;
  });

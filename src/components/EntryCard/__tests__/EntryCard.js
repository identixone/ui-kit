import React from "react";

import { render } from "../../../../test/utils";
import { EntryCard } from "../index.jsx";
import { BrowserRouter as Router } from "react-router-dom";

describe("EntryCard tests", () => {
  const handleDeleteMock = jest.fn();

  const personMock = {
    age: 17,
    entriesIds: [2145883],
    exact: 0,
    ha: 0,
    idxid: "732e7919-508d-4cc2-b5a5-3e1b863c7d33",
    idxid_created: "2019-08-02T15:09:37.721778Z",
    idxid_source: { id: 133971, name: "upload" },
    initial_facesize: 4095,
    initial_liveness: "",
    initial_photo:
      "http://d1.testing.identix.local/dl1/v2/25ed735750c5fa5feabc89e522eca7af51911420/bb73aaafa1596e5425dc514a361ad4ef658f2758/65894d86f87233e058fe28f57e572abdf7c8b4359b1b9928859d1231059ad0a4.jpeg",
    junk: 0,
    liveness: { failed: 0, passed: 0, undetermined: 0 },
    reinit: 0,
    sex: 1,
    total: 1,
  };

  afterEach(() => {
    handleDeleteMock.mockClear();
  });

  afterAll(() => {
    handleDeleteMock.mockReset();
  });

  const defaultProps = {
    person: personMock,
    filters: {},
    actions: true,
    showFoundEntries: true,
    onDelete: handleDeleteMock,
  };

  function getDefaultEntryCard(props) {
    return render(
      <Router>
        <EntryCard {...defaultProps} {...props}>
          <div>s</div>
        </EntryCard>
      </Router>
    );
  }

  function renderEntryCard(props) {
    return getDefaultEntryCard(props);
  }

  test("EntryCard show reinit label if person marked", () => {
    const { queryByTestId } = renderEntryCard({
      person: { ...personMock, reinit: 1 },
    });

    expect(queryByTestId("reinit")).toBeInTheDocument();
  });

  test("EntryCard show buttons if has actions", () => {
    const { queryByTestId } = renderEntryCard();

    expect(queryByTestId("additional-buttons")).toBeInTheDocument();
  });

  test("EntryCard age value equal with mock", () => {
    const { getByTestId } = renderEntryCard();

    expect(getByTestId("age-value")).toHaveTextContent(personMock.age);
  });

  test("EntryCard map sex int value to displayed string", () => {
    const { getByTestId } = renderEntryCard({});

    expect(getByTestId("sex-value")).toHaveTextContent("female");
  });

  /*test("EntryCard action delete must been called once", () => {
    const { getByTestId } = renderEntryCard();

    fireEvent.click(getByTestId("delete-button"));

    expect(handleDeleteMock).toHaveBeenCalledTimes(1);
  });*/
});

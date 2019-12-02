import React from "react";

import { render } from "../../../../../test/utils";
import { personMock } from "../../../../../test/__mocks__";
import { PersonEntriesCard } from "../index.jsx";

describe("PersonEntriesCard tests", () => {
  const handleDeleteMock = jest.fn();

  afterEach(() => {
    handleDeleteMock.mockClear();
  });

  afterAll(() => {
    handleDeleteMock.mockReset();
  });

  const defaultProps = {
    person: personMock,
  };

  function getDefaultEntryCard(props) {
    return render(<PersonEntriesCard {...defaultProps} {...props} />);
  }

  function renderEntryCard(props) {
    return getDefaultEntryCard(props);
  }

  test("PersonEntriesCard show reinit label if person marked", () => {
    const { queryByTestId } = renderEntryCard({
      person: { ...personMock, reinit: 1 },
    });

    expect(queryByTestId("person-entries-card-re")).toBeInTheDocument();
  });

  test("PersonEntriesCard renders person values correctly", () => {
    const { container } = renderEntryCard();

    expect(container).toHaveTextContent(personMock.age);
    expect(container).toHaveTextContent("female");
    expect(container).toHaveTextContent(personMock.idxid_source.name);
  });
});

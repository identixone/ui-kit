import React from "react";
import { fireEvent } from "@testing-library/react";

import { renderWithProviders, render } from "../../../../../test/utils";
import { entries, sources } from "../../../../../test/redux-mocks";
import EntryIdItem from "../EntryIdItem/index.jsx";
import { EntryIdItem as EntryIdItemWithoutConnect } from "../EntryIdItem/index.jsx";

describe("EntryIdItem tests", () => {
  const deletePersonEntries = jest.fn();
  const reinitPerson = jest.fn();
  const pushMock = jest.fn();
  const entryMock = entries.entries.byId["18292756"];
  const reinitEntryMock = entries.entries.byId["1931450"];

  afterAll(() => {
    deletePersonEntries.mockReset();
    reinitPerson.mockReset();
  });

  afterEach(() => {
    deletePersonEntries.mockClear();
    reinitPerson.mockClear();
  });

  function renderEntryIdItem() {
    return render(
      <div id="app-container">
        <EntryIdItemWithoutConnect
          entry={entryMock}
          deletePersonEntries={deletePersonEntries}
          reinitPerson={reinitPerson}
          push={pushMock}
        />
      </div>
    );
  }
  function renderEntryIdItemWithProviders() {
    return renderWithProviders(
      <EntryIdItem
        entry={entryMock}
        deletePersonEntries={deletePersonEntries}
        reinitPerson={reinitPerson}
        push={pushMock}
      />,
      {
        store: { entries, sources },
      }
    );
  }

  test("EntryIdItem delete action called with current entry id", () => {
    const { getByTestId } = renderEntryIdItem();

    fireEvent.click(getByTestId("delete-button"));
    expect(deletePersonEntries).toHaveBeenCalledWith(entryMock.id);
  });

  test("EntryIdItem reinit action called with current params", () => {
    const { getByTestId } = renderEntryIdItem();

    fireEvent.click(getByTestId("reinit-button"));
    expect(reinitPerson).toHaveBeenCalledWith({
      recordId: entryMock.id,
      facesize: entryMock.facesize,
      idxid: entryMock.idxid,
    });
  });

  test("EntryIdItem not highlight when not deleted and highlight when get delete prop", () => {
    const { getByTestId, rerender } = renderEntryIdItemWithProviders();

    expect(getByTestId("entry-id-item")).toHaveStyle("opacity: 1");

    rerender(<EntryIdItem entry={{ ...entryMock, deleted: true }} />);

    expect(getByTestId("entry-id-item")).toHaveStyle("opacity: 0.4");
  });

  test("EntryIdItem not highlight when not deleted and highlight when get delete prop", () => {
    const { getByTestId, rerender } = renderEntryIdItemWithProviders();

    rerender(<EntryIdItem entry={reinitEntryMock} />);

    expect(getByTestId("entry-type").innerHTML).toEqual("reinit");
  });

  test("EntryIdItem not highlight when not deleted and highlight when get delete prop", () => {
    const { getByTestId, rerender } = renderEntryIdItemWithProviders();

    rerender(<EntryIdItem entry={reinitEntryMock} />);

    expect(getByTestId("entry-type").innerHTML).toEqual("reinit");
  });

  test("EntryIdItem reinit type entry cannot delete", () => {
    const { rerender } = renderEntryIdItemWithProviders();

    rerender(<EntryIdItem entry={reinitEntryMock} />);

    const htmlElement = document.querySelector('[data-testid="delete-button"]');
    expect(htmlElement).not.toBeInTheDocument();
  });
});

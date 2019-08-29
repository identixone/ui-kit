import React from "react";

import dayjs from "dayjs";

import { fireEvent, wait } from "@testing-library/react";
import { renderWithProviders } from "../../../../../test/utils";

import EntriesDatetimeFilter, { config } from "../EntriesDatetimeFilter";
import { entries } from "../../../../../test/redux-mocks";

describe("EntriesDatetimeFilter tests", () => {
  const onChangeMock = jest.fn();
  const handleSubmitMock = jest.fn();
  const onToggleMock = jest.fn();
  const props = {
    onChange: onChangeMock,
    handleSubmit: handleSubmitMock,
    onToggle: onToggleMock,
    startDate: null,
    endDate: null,
  };

  function renderEntriesDatetimeFilter(props) {
    return renderWithProviders(<EntriesDatetimeFilter {...props} />, {
      store: { entries },
    });
  }

  afterAll(() => {
    onChangeMock.mockReset();
    handleSubmitMock.mockReset();
    onToggleMock.mockReset();
  });

  afterEach(() => {
    onChangeMock.mockClear();
    handleSubmitMock.mockClear();
    onToggleMock.mockClear();
  });

  test("EntriesDatetimeFilter form values are clear when blur without value('')", () => {
    const { getByTestId } = renderEntriesDatetimeFilter(props);

    fireEvent.click(getByTestId("button-toggle-calendar"));
    const yearFrom = getByTestId("yearFrom");

    fireEvent.click(yearFrom);
    fireEvent.blur(yearFrom);

    expect(yearFrom.value).toBe("");
  });

  test("EntriesDatetimeFilter input has invalid value and get blur event", () => {
    const { getByTestId } = renderEntriesDatetimeFilter(props);

    fireEvent.click(getByTestId("button-toggle-calendar"));
    const monthFrom = getByTestId("monthFrom");
    const dayFrom = getByTestId("dayFrom");

    fireEvent.change(monthFrom, { target: { value: "13" } });
    fireEvent.blur(monthFrom);
    fireEvent.change(dayFrom, { target: { value: "50" } });
    fireEvent.blur(dayFrom);

    expect(getByTestId("monthFrom").value).toBe("Invalid date");
    expect(getByTestId("dayFrom").value).toBe("Invalid date");
  });

  test("EntriesDatetimeFilter startDate and endDate map to inputs without errors", () => {
    const { getByTestId } = renderEntriesDatetimeFilter({
      ...props,
      startDate: dayjs("2019-07-19T16:40:05.326"),
      endDate: dayjs("2020-08-22T23:40:35.671"),
    });

    fireEvent.click(getByTestId("button-toggle-calendar"));

    expect(getByTestId("yearFrom").value).toBe("2019");
    expect(getByTestId("monthFrom").value).toBe("07");
    expect(getByTestId("dayFrom").value).toBe("19");
    expect(getByTestId("hourFrom").value).toBe("16");
    expect(getByTestId("minuteFrom").value).toBe("40");
    expect(getByTestId("secondFrom").value).toBe("05");
    expect(getByTestId("msFrom").value).toBe("326");

    expect(getByTestId("yearTo").value).toBe("2020");
    expect(getByTestId("monthTo").value).toBe("08");
    expect(getByTestId("dayTo").value).toBe("22");
    expect(getByTestId("hourTo").value).toBe("23");
    expect(getByTestId("minuteTo").value).toBe("40");
    expect(getByTestId("secondTo").value).toBe("35");
    expect(getByTestId("msTo").value).toBe("671");
  });

  test("EntriesDatetimeFilter if startDate more than endDate, endDate transform to startDate+1 day", async () => {
    const { getByTestId } = renderEntriesDatetimeFilter({
      ...props,
    });

    fireEvent.click(getByTestId("button-toggle-calendar"));

    const yearFrom = getByTestId("yearFrom");
    const monthFrom = getByTestId("monthFrom");
    const dayFrom = getByTestId("dayFrom");
    const hourFrom = getByTestId("hourFrom");
    const minuteFrom = getByTestId("minuteFrom");
    const secondFrom = getByTestId("secondFrom");
    const msFrom = getByTestId("msFrom");

    const yearTo = getByTestId("yearTo");
    const monthTo = getByTestId("monthTo");
    const dayTo = getByTestId("dayTo");
    const hourTo = getByTestId("hourTo");
    const minuteTo = getByTestId("minuteTo");
    const secondTo = getByTestId("secondTo");
    const msTo = getByTestId("msTo");

    fireEvent.change(yearFrom, { target: { value: "2021" } });
    fireEvent.change(monthFrom, { target: { value: "07" } });
    fireEvent.change(dayFrom, { target: { value: "19" } });
    fireEvent.change(hourFrom, { target: { value: "16" } });
    fireEvent.change(minuteFrom, { target: { value: "40" } });
    fireEvent.change(secondFrom, { target: { value: "05" } });
    fireEvent.change(msFrom, { target: { value: "326" } });

    fireEvent.change(yearTo, { target: { value: "2020" } });
    fireEvent.change(monthTo, { target: { value: "08" } });
    fireEvent.change(dayTo, { target: { value: "22" } });
    fireEvent.change(hourTo, { target: { value: "23" } });
    fireEvent.change(minuteTo, { target: { value: "40" } });
    fireEvent.change(secondTo, { target: { value: "35" } });
    fireEvent.change(msTo, { target: { value: "671" } });

    fireEvent.submit(getByTestId("datetime-form"));
    await wait();

    const startDate = onChangeMock.mock.calls[0][0].startDate;
    const endDate = onChangeMock.mock.calls[0][0].endDate;

    expect(startDate.toISOString()).toEqual(
      dayjs("2021-07-19T16:40:05.326").toISOString()
    );
    expect(endDate.toISOString()).toEqual(
      dayjs("2021-07-20T16:40:05.326").toISOString()
    );
  });

  test("EntriesDatetimeFilter if time of 'startDate' is not typed by user it should be set to default (0)", async () => {
    const { getByTestId } = renderEntriesDatetimeFilter({
      ...props,
    });

    fireEvent.click(getByTestId("button-toggle-calendar"));

    const yearFrom = getByTestId("yearFrom");
    const monthFrom = getByTestId("monthFrom");
    const dayFrom = getByTestId("dayFrom");

    fireEvent.change(yearFrom, { target: { value: "2021" } });
    fireEvent.change(monthFrom, { target: { value: "07" } });
    fireEvent.change(dayFrom, { target: { value: "19" } });
    fireEvent.submit(getByTestId("datetime-form"));
    await wait();

    const startDate = onChangeMock.mock.calls[0][0].startDate;

    expect(startDate.toISOString()).toEqual(
      dayjs("2021-07-19T00:00:00.000").toISOString()
    );
  });

  test("EntriesDatetimeFilter if time of 'endDate is not typed by user it should be set to default (max)", async () => {
    const { getByTestId } = renderEntriesDatetimeFilter({
      ...props,
    });

    fireEvent.click(getByTestId("button-toggle-calendar"));

    const yearTo = getByTestId("yearTo");
    const monthTo = getByTestId("monthTo");
    const dayTo = getByTestId("dayTo");

    fireEvent.change(yearTo, { target: { value: "2020" } });
    fireEvent.change(monthTo, { target: { value: "08" } });
    fireEvent.change(dayTo, { target: { value: "22" } });
    fireEvent.submit(getByTestId("datetime-form"));
    await wait();

    const endDate = onChangeMock.mock.calls[0][0].endDate;

    const { hourTo, minuteTo, secondTo, msTo } = config;

    expect(endDate.toISOString()).toEqual(
      dayjs(
        `2020-08-22T${hourTo.max}:${minuteTo.max}:${secondTo.max}.${msTo.max}`
      ).toISOString()
    );
  });

  test("EntriesDatetimeFilter change input value to right format on blur", async () => {
    const { getByTestId } = renderEntriesDatetimeFilter(props);

    fireEvent.click(getByTestId("button-toggle-calendar"));
    const monthFrom = getByTestId("monthFrom");
    const hourFrom = getByTestId("hourFrom");

    fireEvent.change(monthFrom, { target: { value: "7" } });
    fireEvent.blur(monthFrom);
    fireEvent.change(hourFrom, { target: { value: "3" } });
    fireEvent.blur(hourFrom);

    expect(getByTestId("monthFrom").value).toBe("07");
    expect(getByTestId("hourFrom").value).toBe("03");
  });

  test("EntriesDatetimeFilter focus next after input first independent number", async () => {
    const { getByTestId } = renderEntriesDatetimeFilter(props);

    fireEvent.click(getByTestId("button-toggle-calendar"));
    const monthFrom = getByTestId("monthFrom");
    const dayFrom = getByTestId("dayFrom");
    const hourFrom = getByTestId("hourFrom");
    const minuteFrom = getByTestId("minuteFrom");
    const secondFrom = getByTestId("secondFrom");

    fireEvent.change(monthFrom, { target: { value: "4" } });
    expect(document.activeElement === dayFrom).toBeTruthy();
    fireEvent.change(dayFrom, { target: { value: "9" } });
    expect(document.activeElement === hourFrom).toBeTruthy();
    fireEvent.change(hourFrom, { target: { value: "9" } });
    expect(document.activeElement === minuteFrom).toBeTruthy();
    fireEvent.change(minuteFrom, { target: { value: "9" } });
    expect(document.activeElement === secondFrom).toBeTruthy();
  });

  test("EntriesDatetimeFilter focus next after input invalid month", async () => {
    const { getByTestId } = renderEntriesDatetimeFilter(props);

    fireEvent.click(getByTestId("button-toggle-calendar"));
    const monthFrom = getByTestId("monthFrom");
    const dayFrom = getByTestId("dayFrom");

    fireEvent.change(monthFrom, { target: { value: "15" } });

    expect(document.activeElement === dayFrom).toBeTruthy();
  });

  test("EntriesDatetimeFilter don't focus next after input first number dependent on second number", async () => {
    const { getByTestId } = renderEntriesDatetimeFilter(props);

    fireEvent.click(getByTestId("button-toggle-calendar"));

    const monthFrom = getByTestId("monthFrom");
    const dayFrom = getByTestId("dayFrom");
    const hourFrom = getByTestId("hourFrom");
    const minuteFrom = getByTestId("minuteFrom");
    const secondFrom = getByTestId("secondFrom");

    fireEvent.change(monthFrom, { target: { value: "1" } });
    expect(document.activeElement === dayFrom).not.toBeTruthy();

    fireEvent.change(dayFrom, { target: { value: "3" } });
    expect(document.activeElement === hourFrom).not.toBeTruthy();

    fireEvent.change(hourFrom, { target: { value: "2" } });
    expect(document.activeElement === minuteFrom).not.toBeTruthy();

    fireEvent.change(minuteFrom, { target: { value: "5" } });
    expect(document.activeElement === secondFrom).not.toBeTruthy();
  });
});

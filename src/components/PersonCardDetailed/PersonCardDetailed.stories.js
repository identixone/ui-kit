import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { object, boolean } from "@storybook/addon-knobs";

import {
  PersonCardDetailed,
  PersonCardDetailedDataItemLabel as PersonLabel,
  PersonCardDetailedDataItemValue as PersonValue,
  PersonCardDetailedDataItemIdValue as PersonIdValue,
  PersonCardDetailedDataItemPhoto as PersonPhoto,
} from "./index.jsx";

import { personMock } from "../../../test/__mocks__";

import { IdFormat } from "../IdFormat";

import { formatSex, formatDate, formatFaceSize } from "../../utils";
import { noimageid } from "../../assets/images";

const StyledPersonCardDetailed = styled(PersonCardDetailed)`
  min-height: 502px;
  width: 334px;
`;

storiesOf("Persons| PersonCardDetailed", module).add("default", () => {
  const person = object("Person", personMock);

  const isLoading = boolean("isLoading", false);
  const isPersonNotExists = boolean("isPersonNotExists", false);

  return (
    <StyledPersonCardDetailed
      person={!isPersonNotExists && person}
      isLoading={isLoading}
      isPersonNotExists={isPersonNotExists}
    >
      <PersonCardDetailed.Data>
        <PersonCardDetailed.DataItem>
          <PersonLabel>Photo</PersonLabel>
          <PersonValue>
            <PersonPhoto
              src={person.initial_photo || noimageid}
              facesize={formatFaceSize(person.initial_facesize)}
            />
          </PersonValue>
        </PersonCardDetailed.DataItem>
        <PersonCardDetailed.DataItem>
          <PersonLabel>ID</PersonLabel>
          <PersonIdValue>
            <IdFormat>{person.idxid}</IdFormat>
          </PersonIdValue>
        </PersonCardDetailed.DataItem>
        <PersonCardDetailed.DataItem>
          <PersonLabel>Age</PersonLabel>
          <PersonValue>{person.age}</PersonValue>
        </PersonCardDetailed.DataItem>
        <PersonCardDetailed.DataItem>
          <PersonLabel>Sex</PersonLabel>
          <PersonValue>{formatSex(person.sex)}</PersonValue>
        </PersonCardDetailed.DataItem>
        <PersonCardDetailed.DataItem>
          <PersonLabel>Card created</PersonLabel>
          <PersonValue>{formatDate(person.idxid_created)}</PersonValue>
        </PersonCardDetailed.DataItem>
        <PersonCardDetailed.DataItem>
          <PersonLabel>Place of first entry</PersonLabel>
          <PersonValue>{person.idxid_source.name}</PersonValue>
        </PersonCardDetailed.DataItem>
        <PersonCardDetailed.DataItem>
          <PersonLabel>Total existing entries</PersonLabel>
          <PersonValue isZeroEmpty={true}>{person.total}</PersonValue>
        </PersonCardDetailed.DataItem>
        <PersonCardDetailed.DataItem>
          <PersonLabel>Exact entries</PersonLabel>
          <PersonValue isZeroEmpty={true}>{person.exact}</PersonValue>
        </PersonCardDetailed.DataItem>
        <PersonCardDetailed.DataItem>
          <PersonLabel>HA entries</PersonLabel>
          <PersonValue isZeroEmpty={true}>{person.ha}</PersonValue>
        </PersonCardDetailed.DataItem>
        <PersonCardDetailed.DataItem>
          <PersonLabel>Junk entries</PersonLabel>
          <PersonValue isZeroEmpty={true}>{person.junk}</PersonValue>
        </PersonCardDetailed.DataItem>
      </PersonCardDetailed.Data>
    </StyledPersonCardDetailed>
  );
});

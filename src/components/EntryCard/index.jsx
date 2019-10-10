import React from "react";
import PropTypes from "prop-types";

import { IdCopy } from "../IdCopy";
import { Value } from "../Value";
import { FaceSize } from "../FaceSize";
import { LazyImage } from "../LazyImage";

import { StyledCloseButton } from "./StyledCloseButton";
import { StyledDeleteButton } from "./StyledDeleteButton";
import { StyledListsButton } from "./StyledListsButton";
import StyledEntryCard from "./StyledEntryCard";
import StyledLabel from "./StyledLabel";
import StyledData from "./StyledData";
import StyledReinit from "./StyledReinit";
import StyledColumnFirst from "./StyledColumnFirst";
import StyledColumnSecond from "./StyledColumnSecond";
import StyledEntryCardPhoto from "./StyledEntryCardPhoto";

import { colors } from "../../themes/colors";
import noimageid from "../../assets/images/noimageid.png";
import {
  timeFormat,
  formatFaceSize,
  mapFiltersToGetParams,
  formatSex,
} from "../../utils/helpers";
import EntryAdditionalButtons from "../EntryAdditionalButtons/index";

function EntryCard(props) {
  const { person, filters, actions, className } = props;
  const {
    age,
    idxid_created,
    exact,
    ha,
    idxid,
    initial_photo,
    junk,
    sex,
    idxid_source,
    total,
    initial_facesize,
    reinit,
  } = person;

  function handleDelete() {
    props.onDelete(idxid);
  }

  return (
    <StyledEntryCard className={className}>
      {reinit ? <StyledReinit>RE</StyledReinit> : ""}
      <StyledEntryCardPhoto>
        <FaceSize title="face area in pixels">
          {formatFaceSize(initial_facesize)}
        </FaceSize>
        <LazyImage src={initial_photo || noimageid} />
      </StyledEntryCardPhoto>

      {/* TODO: использовать слоты для actions */}
      {actions && (
        <EntryAdditionalButtons>
          <StyledCloseButton
            buttonTheme="light-gray"
            to={`/entries/${mapFiltersToGetParams(filters)}`}
          >
            close
          </StyledCloseButton>
          <StyledDeleteButton
            onDelete={handleDelete}
            deleteColor={colors.brownSimple}
          >
            delete
          </StyledDeleteButton>
          <StyledListsButton to={`/persons-lists/?q=${person.idxid}`}>
            lists
          </StyledListsButton>
        </EntryAdditionalButtons>
      )}

      <StyledColumnFirst>
        <StyledLabel>
          ID
          <StyledData>
            <IdCopy id={idxid} />
          </StyledData>
        </StyledLabel>
        <StyledLabel>
          Age
          <StyledData>
            <Value>{age}</Value>
          </StyledData>
        </StyledLabel>
        <StyledLabel>
          Sex
          <StyledData>
            <Value>{formatSex(sex)}</Value>
          </StyledData>
        </StyledLabel>
        <StyledLabel>
          Card created
          <StyledData>
            <Value>{timeFormat(idxid_created)}</Value>
          </StyledData>
        </StyledLabel>
        <StyledLabel>
          Place of first entry
          <StyledData>
            <Value>{idxid_source && idxid_source.name}</Value>
          </StyledData>
        </StyledLabel>
      </StyledColumnFirst>

      <StyledColumnSecond>
        <StyledLabel>
          Total existing entries
          <StyledData>
            <Value isZeroEmpty={true}>{total}</Value>
          </StyledData>
        </StyledLabel>
        <StyledLabel>
          Exact entries
          <StyledData>
            <Value isZeroEmpty={true}>{exact}</Value>
          </StyledData>
        </StyledLabel>
        <StyledLabel>
          HA entries
          <StyledData>
            <Value isZeroEmpty={true}>{ha}</Value>
          </StyledData>
        </StyledLabel>
        <StyledLabel>
          Junk entries
          <StyledData>
            <Value isZeroEmpty={true}>{junk}</Value>
          </StyledData>
        </StyledLabel>

        <StyledLabel>
          Found entries
          <StyledData>
            <Value isZeroEmpty={true}>{total}</Value>
          </StyledData>
        </StyledLabel>
      </StyledColumnSecond>
    </StyledEntryCard>
  );
}

EntryCard.propTypes = {
  onDelete: PropTypes.func.isRequired,
  person: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  actions: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

EntryCard.defaultProps = {
  person: {},
  filters: {},
  actions: false,
};

export { EntryCard, StyledEntryCard };

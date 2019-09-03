import React from "react";
import PropTypes from "prop-types";

import { IdCopy } from "../IdCopy";
import { DeleteSureButton } from "../DeleteSureButton";
import { Value } from "../Value";
import { FaceSize } from "../FaceSize";

import StyledCloseButton from "./StyledCloseButton";
import StyledEntryCard from "./StyledEntryCard";
import StyledLabel from "./StyledLabel";
import StyledData from "./StyledData";
import StyledReinit from "./StyledReinit";
import StyledColumnFirst from "./StyledColumnFirst";
import StyledColumnSecond from "./StyledColumnSecond";
import StyledEntryCardButtonsContainer from "./StyledEntryCardButtonsContainer";
import StyledEntryCardPhoto from "./StyledEntryCardPhoto";
import StyledEntryCardContainer from "./StyledEntryCardContainer";
import StyledMainEntryCard from "./StyledMainEntryCard";

import { colors } from "../../themes/colors";
import noimageid from "../../assets/images/noimageid.png";
import {
  timeFormat,
  formatFaceSize,
  isNotEmpty,
  mapFiltersToGetParams,
} from "../../utils/helpers";

function EntryCard(props) {
  const { person, filters } = props;
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

  const sexName = (isNotEmpty(sex) && (sex === 0 ? "male" : "female")) || "-";

  return (
    <StyledEntryCard>
      <StyledMainEntryCard>
        {reinit ? <StyledReinit>RE</StyledReinit> : ""}
        <StyledEntryCardContainer>
          <StyledEntryCardPhoto>
            <FaceSize title="face area in pixels">
              {formatFaceSize(initial_facesize)}
            </FaceSize>
            <img src={initial_photo || noimageid} alt="" />
          </StyledEntryCardPhoto>
          <StyledEntryCardButtonsContainer>
            <StyledCloseButton
              buttonTheme="light-gray"
              to={`/entries/${mapFiltersToGetParams(filters)}`}
              size="large"
            >
              close
            </StyledCloseButton>
            <DeleteSureButton
              onDelete={handleDelete}
              deleteColor={colors.brownSimple}
            />
          </StyledEntryCardButtonsContainer>

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
                <Value>{sexName}</Value>
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
                <Value>{total}</Value>
              </StyledData>
            </StyledLabel>
            <StyledLabel>
              Exact entries
              <StyledData>
                <Value>{exact}</Value>
              </StyledData>
            </StyledLabel>
            <StyledLabel>
              HA entries
              <StyledData>
                <Value>{ha}</Value>
              </StyledData>
            </StyledLabel>
            <StyledLabel>
              Junk entries
              <StyledData>
                <Value>{junk}</Value>
              </StyledData>
            </StyledLabel>
            <StyledLabel>
              Found entries
              <StyledData>
                <Value>{total}</Value>
              </StyledData>
            </StyledLabel>
          </StyledColumnSecond>
        </StyledEntryCardContainer>
      </StyledMainEntryCard>
    </StyledEntryCard>
  );
}

EntryCard.propTypes = {
  onDelete: PropTypes.func.isRequired,
  person: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
};

EntryCard.defaultProps = {
  person: {},
  filters: {},
};

export { EntryCard, StyledEntryCard };

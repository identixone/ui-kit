import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { deleteEntriesRoutine } from "../../../app/entries";
import {
  timeFormat,
  formatFaceSize,
  isNotEmpty,
} from "../../../utils/helpers.js";

import noimageid from "../../assets/images/noimageid.png";

import IdCopy from "../IdCopy";

import StyledCard from "./StyledCard";
import StyledLabel from "./StyledLabel";
import StyledData from "./StyledData";
import StyledReinit from "./StyledReinit";
import StyledColumnFirst from "./StyledColumnFirst";
import StyledColumnSecond from "./StyledColumnSecond";
import StyledCardButtonsContainer from "./StyledCardButtonsContainer";
import StyledCardPhoto from "./StyledCardPhoto";
import StyledCardContainer from "./StyledCardContainer";
import StyledMainCard from "./StyledMainCard";
import Value from "../Value.jsx";
import StyledFacesize from "./../../components/StyledFacesize.jsx";

import StyledCardAsideButtonDelete from "./StyledCardAsideButtonDelete";
import StyledCardAsideButtonLink from "./StyledCardAsideButtonLink";

import colors from "../../../ui/assets/common/themes/colors.js";

function PersonCard({ person, deletePersonEntries }) {
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

  const sexName = (isNotEmpty(sex) && (sex === 0 ? "male" : "female")) || "-";

  const handleDelete = () => {
    deletePersonEntries(idxid);
  };

  return (
    <StyledCard>
      <StyledMainCard>
        {reinit ? <StyledReinit>RE</StyledReinit> : ""}
        <StyledCardContainer>
          <StyledCardPhoto>
            <StyledFacesize title="face area in pixels">
              {formatFaceSize(initial_facesize)}
            </StyledFacesize>
            <img src={initial_photo || noimageid} alt="" />
          </StyledCardPhoto>

          <StyledCardButtonsContainer>
            <StyledCardAsideButtonLink
              to="/entries"
              type="ghost"
              buttonTheme="reset"
            >
              close
            </StyledCardAsideButtonLink>
            <StyledCardAsideButtonDelete
              onDelete={handleDelete}
              deleteColor={colors.brownSimple}
            />
            <StyledCardAsideButtonLink to={`/persons-lists?q=${idxid}`}>
              Lists
            </StyledCardAsideButtonLink>
          </StyledCardButtonsContainer>

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
        </StyledCardContainer>
      </StyledMainCard>
    </StyledCard>
  );
}

PersonCard.propTypes = {
  person: PropTypes.object,
  deletePersonEntries: PropTypes.func,
};

PersonCard.defaultProps = {
  person: {},
};

export default connect(
  null,
  { deletePersonEntries: deleteEntriesRoutine.request }
)(PersonCard);

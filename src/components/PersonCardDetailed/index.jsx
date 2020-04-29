import React from "react";
import PropTypes from "prop-types";

import { useEffect } from "react";
import { useTranslation } from "../../hooks";

import { StyledPersonCardDetailed } from "./StyledPersonCardDetailed";
import { PersonCardDetailedSpinner } from "./PersonCardDetailedSpinner";
import {
  PersonCardDetailedData,
  PersonCardDetailedDataItem,
} from "./PersonCardDetailedData";
import { NoticeHero } from "../NoticeHero";

import { Ban, PlaylistAddCheck } from "../icons";

import { resources } from "./PersonCardDetailed.resources";

function PersonCardDetailed({
  person,
  fetchPerson,
  personIdxid,
  isLoading,
  isPersonNotExists,
  children,
  className,
  "data-testid": testId,
  offsetTop,
}) {
  const { t, i18n } = useTranslation("PersonCardDetailed");
  i18n.addResourceBundle("en", "PersonCardDetailed", resources.en);
  i18n.addResourceBundle("ru", "PersonCardDetailed", resources.ru);

  useEffect(() => {
    if (personIdxid) {
      fetchPerson(personIdxid);
    }
  }, [personIdxid]);

  return (
    <StyledPersonCardDetailed
      data-testid={testId}
      className={className}
      offsetTop={offsetTop}
    >
      {isLoading ? (
        <PersonCardDetailedSpinner />
      ) : person && !isPersonNotExists ? (
        children
      ) : isPersonNotExists ? (
        <NoticeHero icon={<Ban size="48" />} title={t("Person not found")} />
      ) : (
        <NoticeHero
          icon={<PlaylistAddCheck size="48" />}
          title={t("Select person to view details")}
        />
      )}
    </StyledPersonCardDetailed>
  );
}

PersonCardDetailed.Data = PersonCardDetailedData;
PersonCardDetailed.DataItem = PersonCardDetailedDataItem;

PersonCardDetailed.propTypes = {
  person: PropTypes.object,
  fetchPerson: PropTypes.func.isRequired,
  personIdxid: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  isPersonNotExists: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  className: PropTypes.string.isRequired,
  "data-testid": PropTypes.string,
  offsetTop: PropTypes.number.isRequired,
};

PersonCardDetailed.defaultProps = {
  "data-testid": "person-card-detailed",
  offsetTop: 120,
};

export * from "./PersonCardDetailedData";
export * from "./PersonCardDetailedActions";
export {
  PersonCardDetailed,
  StyledPersonCardDetailed,
  PersonCardDetailedData,
  PersonCardDetailedDataItem,
};

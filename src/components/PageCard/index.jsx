import React from "react";
import PropTypes from "prop-types";

import { useEffect } from "react";

import { Button } from "../Button";
import { StyledPageCard } from "./StyledPageCard";
import { PageCardButtons } from "./PageCardButtons";

import { Check, ArrowLeft } from "../../assets/icons";

function PageCard({
  children,
  withButtons,
  onUpdate,
  isLoading,
  onBackButtonClick,
  className,
  fetchError,
}) {
  useEffect(() => {
    if (fetchError && onBackButtonClick) {
      onBackButtonClick();
    }
  }, [fetchError]);

  return (
    <StyledPageCard className={className}>
      {children}
      {withButtons && (
        <PageCardButtons>
          <Button
            fit="square"
            size="large"
            buttonTheme="dark"
            onClick={onBackButtonClick}
            data-testid="page-card-back-button"
          >
            <ArrowLeft size="16" />
          </Button>
          <Button
            fit="square"
            size="large"
            buttonTheme="green"
            onClick={onUpdate}
            isDisabled={isLoading}
            data-testid="page-card-update-button"
          >
            <Check size="14" />
          </Button>
        </PageCardButtons>
      )}
    </StyledPageCard>
  );
}

PageCard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  withButtons: PropTypes.bool,
  onUpdate: PropTypes.func,
  isLoading: PropTypes.bool,
  onBackButtonClick: PropTypes.func,
  fetchError: PropTypes.object,
  className: PropTypes.string,
};

export { PageCard, StyledPageCard };

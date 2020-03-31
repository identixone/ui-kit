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
  isLoading,
  onDone,
  onBack,
  className,
  fetchError,
}) {
  useEffect(() => {
    if (fetchError && onBack) {
      onBack();
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
            onClick={onBack}
            data-testid="page-card-back-button"
          >
            <ArrowLeft size="16" />
          </Button>
          <Button
            fit="square"
            size="large"
            buttonTheme="green"
            onClick={onDone}
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
  onDone: PropTypes.func,
  onBack: PropTypes.func,
  isLoading: PropTypes.bool,
  fetchError: PropTypes.object,
  className: PropTypes.string,
};

export { PageCard, StyledPageCard };

import React from "react";
import PropTypes from "prop-types";

import StyledPageCard from "./StyledPageCard";
import PageCardButtons from "./PageCardButtons";
import PageCardButton from "./PageCardButton";
import PageCardTitle from "./PageCardTitle";

import { Sync, ArrowLeft } from "../../assets/icons";

export default class PageCard extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
    withButtons: PropTypes.bool,
    onUpdate: PropTypes.func,
    title: PropTypes.string,
    titleColor: PropTypes.string,
    isLoading: PropTypes.bool,
    onBackButtonClick: PropTypes.func,
    fetchError: PropTypes.object,
    className: PropTypes.string,
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.fetchError && this.props.fetchError) {
      this.props.onBackButtonClick();
    }
  }

  render() {
    const {
      children,
      withButtons,
      onUpdate,
      title,
      titleColor,
      isLoading,
      onBackButtonClick,
      className,
    } = this.props;

    return (
      <StyledPageCard className={className}>
        {title && (
          <PageCardTitle titleColor={titleColor} data-testid="page-card-title">
            {title}
          </PageCardTitle>
        )}
        {children}
        {withButtons && (
          <PageCardButtons>
            <PageCardButton buttonTheme="dark" onClick={onBackButtonClick}>
              <ArrowLeft size="16" />
            </PageCardButton>
            <PageCardButton
              buttonTheme="lighter"
              onClick={onUpdate}
              isDisabled={isLoading}
              data-testid="page-card-update-button"
            >
              <Sync size="16" isSpin={isLoading} />
            </PageCardButton>
          </PageCardButtons>
        )}
      </StyledPageCard>
    );
  }
}

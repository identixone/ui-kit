import React from "react";
import PropTypes from "prop-types";

import Popup from "../Popup/index.jsx";
import WithListItemsContext from "../WithCurrentOpenItem/WithListItemsContext.jsx";
import StyledListItemPopupContainer from "./StyledListItemPopupContainer.jsx";

import StyledListItemPopupInner from "./StyledListItemPopupInner.jsx";

class ListItemPopup extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    initialOpen: PropTypes.bool,
    id: PropTypes.number,
    currentOpenItem: PropTypes.number,
    setCurrentOpenItem: PropTypes.func,
    pupupTrigger: PropTypes.object,
  };

  static defaultProps = {
    initialOpen: false,
  };

  static getDerivedStateFromProps(props) {
    if (props.currentOpenItem === props.id) {
      return {
        isOpen: true,
      };
    }

    return { isOpen: false };
  }

  state = {
    isOpen: this.props.initialOpen,
  };

  componentDidMount() {
    const { current: pupupTriggerEl } = this.props.pupupTrigger;

    if (pupupTriggerEl) {
      pupupTriggerEl.addEventListener("click", this.handleTriggerOpenClick);
    }
  }

  componentWillUnmount() {
    const { current: pupupTriggerEl } = this.props.pupupTrigger;

    if (pupupTriggerEl) {
      pupupTriggerEl.removeEventListener("click", this.handleTriggerOpenClick);
    }
  }

  handleTriggerOpenClick = () => {
    this.props.setCurrentOpenItem(this.props.id);
  };

  handleTriggerCloseClick = () => {
    this.props.setCurrentOpenItem(null);
  };

  render() {
    const { children } = this.props;
    const { isOpen } = this.state;
    return (
      <React.Fragment>
        <Popup
          position="top"
          isOpen={isOpen}
          pupupTrigger={this.props.pupupTrigger}
          triggerContent={children}
          render={({ isOpen, left, top, popupInner }) => (
            <StyledListItemPopupContainer
              data-testid="list-item-popup-container"
              isOpen={isOpen}
              left={left}
              top={top}
            >
              <StyledListItemPopupInner ref={popupInner}>
                {typeof children === "function"
                  ? children({
                      isOpen,
                      pupupTrigger: this.props.pupupTrigger,
                      handleTriggerCloseClick: this.handleTriggerCloseClick,
                    })
                  : children}
              </StyledListItemPopupInner>
            </StyledListItemPopupContainer>
          )}
        />
      </React.Fragment>
    );
  }
}

export default WithListItemsContext(ListItemPopup);

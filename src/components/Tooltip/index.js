import React from "react";
import PropTypes from "prop-types";

import Popup from "../Popup/index.jsx";

import TooltipContainer from "./TooltipContainer";
import TooltipInner from "./TooltipInner";
import TooltipTitle from "./TooltipTitle";

class Tooltip extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    initialOpen: PropTypes.bool,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  };

  static defaultProps = {
    initialOpen: false,
  };

  state = {
    isOpen: this.props.initialOpen,
    // Координаты тултипа
  };

  tooltipTrigger = React.createRef();

  componentDidMount() {
    const { current: tooltipTriggerEl } = this.tooltipTrigger;

    if (tooltipTriggerEl) {
      tooltipTriggerEl.addEventListener("mouseover", this.handleTriggerHover);
      tooltipTriggerEl.addEventListener("mouseleave", this.handleTriggerLeave);
    }
  }

  componentWillUnmount() {
    const { current: tooltipTriggerEl } = this.tooltipTrigger;

    if (tooltipTriggerEl) {
      tooltipTriggerEl.removeEventListener(
        "mouseover",
        this.handleTriggerHover
      );
      tooltipTriggerEl.removeEventListener(
        "mouseleave",
        this.handleTriggerLeave
      );
    }
  }

  handleTriggerHover = () => {
    this.setState({ isOpen: true });
  };

  handleTriggerLeave = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { children, title } = this.props;
    const { isOpen } = this.state;
    return (
      <React.Fragment>
        {typeof children === "function" ? (
          children({
            isOpen,
            tooltipTrigger: this.tooltipTrigger,
          })
        ) : (
          <span ref={this.tooltipTrigger}>{children}</span>
        )}
        <Popup
          position={"right"}
          isOpen={isOpen}
          pupupTrigger={this.tooltipTrigger}
          triggerContent={children}
          render={({ isOpen, left, top, popupInner }) => (
            <TooltipContainer isOpen={isOpen} left={left} top={top}>
              <TooltipInner ref={popupInner}>
                <TooltipTitle>{title}</TooltipTitle>
              </TooltipInner>
            </TooltipContainer>
          )}
        />
      </React.Fragment>
    );
  }
}

export default Tooltip;

import React from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import { rootEl } from "../../../index";

class Popup extends React.Component {
  static propTypes = {
    initialOpen: PropTypes.bool,
    pupupTrigger: PropTypes.object,
    position: PropTypes.oneOf(["right", "top"]),
    render: PropTypes.func.isRequired,
    isOpen: PropTypes.bool,
  };

  static defaultProps = {
    initialOpen: false,
    position: "right",
  };

  state = {
    isOpen: this.props.initialOpen,
    // Координаты тултипа
    top: null,
    left: null,
  };

  static getDerivedStateFromProps(props) {
    return {
      isOpen: props.isOpen,
    };
  }

  popupContainer = document.createElement("div");
  popupInner = React.createRef();

  componentDidMount() {
    const currentRoot = document.getElementById("app-container") || rootEl;
    currentRoot.appendChild(this.popupContainer);
    window.addEventListener("resize", this.updatePopupCoords);
  }

  componentDidUpdate(_, prevState) {
    if (!prevState.isOpen && this.state.isOpen) {
      this.updatePopupCoords();
    }
  }

  componentWillUnmount() {
    const currentRoot = document.getElementById("app-container") || rootEl;
    currentRoot.removeChild(this.popupContainer);
    window.removeEventListener("resize", this.updatePopupCoords);
  }

  updatePopupCoords = () => {
    const { current: pupupTriggerEl } = this.props.pupupTrigger;
    if (this.state.isOpen === true) {
      this.setPopupCoords(pupupTriggerEl);
    }
  };

  setPopupCoords = pupupTriggerEl => {
    const { left, top, width, height } = pupupTriggerEl.getBoundingClientRect();

    const innerHeight = this.popupInner.current.offsetHeight;
    const { position } = this.props;

    switch (position) {
      case "right":
        this.setState({
          top: top + window.scrollY - innerHeight / 2 + height / 2,
          left: left + width + 10,
        });

        break;
      case "top":
        this.setState({
          top: top + window.scrollY - 5,
          left: left - 5,
        });

        break;
      // no default
    }
  };

  render() {
    const { isOpen, left, top } = this.state;

    /* Отдельно рендерим попап в портале */
    return createPortal(
      this.props.render({
        isOpen,
        left,
        top,
        popupInner: this.popupInner,
      }),
      this.popupContainer
    );
  }
}

export default Popup;

import React from "react";
import PropTypes from "prop-types";

export class ButtonToggleWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    isOpen: PropTypes.bool,
    render: PropTypes.func,
    onChange: PropTypes.func,
    onCrossClick: PropTypes.func,
    mode: PropTypes.string,
    icon: PropTypes.node,
  };

  static defaultProps = {
    isOpen: false,
    onCrossClick: () => {},
  };

  state = {
    isOpen: this.props.isOpen,
  };

  handleToggleClick = () => {
    this.setState(
      ({ isOpen }) => ({ isOpen: !isOpen }),
      () => {
        this.props.onChange(this.state.isOpen);
      }
    );
  };

  handleCrossClick = () => {
    this.setState(
      ({ isOpen }) => (isOpen ? { isOpen: false } : null),
      () => {
        this.props.onChange(this.state.isOpen);
        this.props.onCrossClick();
      }
    );
  };

  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.setState({ isOpen: this.props.isOpen });
    }
  }

  render() {
    const { isOpen } = this.state;
    const { children, icon, mode } = this.props;

    return this.props.render({
      isOpen: isOpen,
      icon: icon,
      children,
      mode,
      handleToggleClick: this.handleToggleClick,
      handleCrossClick: this.handleCrossClick,
    });
  }
}

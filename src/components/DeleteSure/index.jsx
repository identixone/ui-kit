import React from "react";
import PropTypes from "prop-types";

export default class DeleteSure extends React.Component {
  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired,
  };

  handleClick = e => {
    e.stopPropagation();

    if (this.state.isSure) {
      this.props.onDelete();
    }

    this.setState({ isSure: true });
  };

  handleMouseLeave = () => {
    if (this.state.isSure) {
      this.setState({ isSure: false });
    }
  };

  state = {
    isSure: false,
    handleClick: this.handleClick,
    handleMouseLeave: this.handleMouseLeave,
  };

  render() {
    const { children } = this.props;

    return children(this.state);
  }
}

import React from "react";
import PropTypes from "prop-types";

const isCopyAvailible =
  document.queryCommandSupported && document.queryCommandSupported("copy");

class CopyItem extends React.Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
  };

  copyItemRef = React.createRef();

  state = {
    isCopySuccess: false,
    isError: false,
  };

  copyToClipboard = () => {
    this.setState({ isCopySuccess: false }, () => {
      /**
       * На случай копирования из скрытых элементов
       * добавляется новый элемент, контент котрого
       * это значение или html исходного элемента
       */
      try {
        const sourceEl = this.copyItemRef.current;
        const el = document.createElement("textarea");

        el.value = sourceEl.value || sourceEl.innerHTML;
        el.setAttribute("readonly", "");
        el.style.position = "absolute";
        el.style.left = "-9999px";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);

        this.setState({ isCopySuccess: true });
      } catch (error) {
        console.log(error);
        this.setState({ isError: true });
      }
    });
  };

  render() {
    return this.props.render({
      isCopyAvailible,
      copyItemRef: this.copyItemRef,
      copyData: this.copyToClipboard,
    });
  }
}

export default CopyItem;

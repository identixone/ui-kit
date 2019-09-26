import React from "react";
import PropTypes from "prop-types";

import { uniq, noop } from "lodash-es";

export class SelectableList extends React.Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    render: PropTypes.func,
    children: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.array,
  };

  static defaultProps = {
    options: [],
    onChange: noop,
  };

  deselectAll = () => {
    this.setState({ selected: [] });
  };

  selectAll = () => {
    const { options } = this.props;

    this.setState({
      selected: options.map(option => option.value || String(option)),
    });
  };

  handleCheckboxChange = event => {
    const { name } = event.target;
    const { lastChecked } = this.state;
    const { shiftKey } = event.nativeEvent;

    const isCheck = !this.state.selected.includes(name);

    if (shiftKey && name !== lastChecked) {
      this.checkIntermediateBoxes(name, isCheck);
    }

    this.setState(({ selected }) => ({
      selected: isCheck
        ? uniq(selected.concat(name))
        : selected.filter(option => option !== name),
      lastChecked: name,
    }));
  };

  checkIntermediateBoxes(checkTo, isCheck) {
    let { lastChecked: checkFrom } = this.state;
    const { options } = this.props;
    const stringOptions = options.map(option =>
      option.value ? String(option.value) : String(option)
    );

    if (stringOptions.indexOf(checkFrom) > stringOptions.indexOf(checkTo)) {
      [checkTo, checkFrom] = [checkFrom, checkTo];
    }

    const hasToCheck = stringOptions
      .filter(
        (_, key) =>
          stringOptions.indexOf(checkFrom) < key &&
          key < stringOptions.indexOf(checkTo)
      )
      .concat([checkFrom, checkTo]);

    this.setState(({ selected }) => ({
      selected: isCheck
        ? uniq([...selected, ...hasToCheck])
        : selected.filter(option => !hasToCheck.includes(option)),
    }));
  }

  state = {
    selected: this.props.value || [],
    selectAll: this.selectAll,
    deselectAll: this.deselectAll,
    handleCheckboxChange: this.handleCheckboxChange,
    lastChecked: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selected !== this.state.selected) {
      this.props.onChange(this.state.selected);
    }

    if (prevProps.value !== this.props.value) {
      this.setState({ selected: this.props.value });
    }
  }

  render() {
    const { selected } = this.state;
    const { options, render, children } = this.props;

    const hasOptions = Boolean(options.length);

    const sharedState = {
      ...this.state,
      options,
      hasOptions,
      isAllSelected: hasOptions && selected.length === options.length,
      isAllDeselected: hasOptions && selected.length === 0,
    };

    if (render) {
      return render(sharedState);
    } else {
      return children(sharedState);
    }
  }
}

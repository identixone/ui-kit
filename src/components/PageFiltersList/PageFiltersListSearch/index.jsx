import React from "react";
import PropTypes from "prop-types";

import { withPageFiltersListContext } from "../PageFiltersListContext";

import PageFiltersListSearchInput from "./PageFiltersListSearchInput";

export class PageFiltersListSearch extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    setSearchQuery: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    "data-testid": PropTypes.string,
  };

  inputRef = React.createRef();

  componentDidMount() {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
  }

  handleChange = ({ target: { value } }) => {
    this.props.setSearchQuery(value);
  };

  getTypeProps() {
    switch (this.props.type) {
      case "small":
        return {
          iconSize: 15,
          className: `smallInput ${this.props.className}`,
          fontSize: 16,
        };
      default:
        return {};
    }
  }

  render() {
    const { searchQuery, placeholder, className } = this.props;

    return (
      <PageFiltersListSearchInput
        className={className}
        data-testid={this.props["data-testid"]}
        innerRef={this.inputRef}
        value={searchQuery}
        inputPlaceholder={placeholder ? placeholder : undefined}
        onChange={this.handleChange}
        {...this.getTypeProps()}
      />
    );
  }
}

export default withPageFiltersListContext(PageFiltersListSearch);

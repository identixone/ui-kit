import React from "react";
import PropTypes from "prop-types";

import { withPageFiltersListContext } from "../PageFiltersListContext";

import PageFiltersListSearchInput from "./PageFiltersListSearchInput";

export class PageFiltersListSearch extends React.Component {
  static propTypes = {
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

  render() {
    const { searchQuery, placeholder } = this.props;

    return (
      <PageFiltersListSearchInput
        data-testid={this.props["data-testid"]}
        innerRef={this.inputRef}
        value={searchQuery}
        inputPlaceholder={placeholder ? placeholder : undefined}
        onChange={this.handleChange}
      />
    );
  }
}

export default withPageFiltersListContext(PageFiltersListSearch);

import React, { Component } from "react";
import PropTypes from "prop-types";

const calculateSelectedPage = (offset, limit) => {
  return offset / limit + 1 || 1;
};

const withPaginationFlow = Pagination =>
  class PaginationFlow extends Component {
    static propTypes = {
      isVisible: PropTypes.bool,
      totalCount: PropTypes.number,
      limit: PropTypes.number,
      offset: PropTypes.number,
      visibleRange: PropTypes.number.isRequired,
      nearStartBorderNum: PropTypes.number.isRequired,
      onChange: PropTypes.func.isRequired,
    };

    static defaultProps = {
      visibleRange: 2,
      nearStartBorderNum: 3,
      offset: 0,
      limit: 20,
    };

    constructor(...args) {
      super(...args);
      const { totalCount, limit } = this.props;
      const fullPaginationNumbersLength = Math.ceil(totalCount / limit || 0);

      const selectedPageNum = calculateSelectedPage(
        this.props.offset,
        this.props.limit
      );
      this.state = {
        selectedPageNum,
        isPrevPaginationButtonActive: selectedPageNum > 1,
        isNextPaginationButtonActive:
          selectedPageNum !== fullPaginationNumbersLength,
      };
    }

    componentDidUpdate(prevProps) {
      const { limit, offset, totalCount } = this.props;

      if (
        limit !== prevProps.limit ||
        totalCount !== prevProps.totalCount ||
        offset !== prevProps.offset
      ) {
        this.handleChangePagination(calculateSelectedPage(offset, limit));
      }
    }

    handleChange = () => {
      const { limit, offset } = this.props;
      this.setState({
        selectedPageNum: calculateSelectedPage(offset, limit),
      });
    };

    handleChangePagination = value => {
      const { totalCount, limit } = this.props;
      const fullPaginationNumbersLength = Math.ceil(totalCount / limit || 0);
      this.setState(
        {
          selectedPageNum: value,
          isNextPaginationButtonActive: value !== fullPaginationNumbersLength,
          isPrevPaginationButtonActive: value > 1,
        },
        () => {
          this.props.onChange({ offset: limit * (value - 1) });
        }
      );
    };

    handlePaginationNext = () => {
      const { selectedPageNum } = this.state;
      const value = selectedPageNum + 1;

      this.handleChangePagination(value);
    };

    handlePaginationPrev = () => {
      const { selectedPageNum } = this.state;
      if (selectedPageNum > 1) {
        this.handleChangePagination(selectedPageNum - 1);
      }
    };

    render() {
      return (
        <Pagination
          {...this.state}
          handleChangePagination={this.handleChangePagination}
          handlePaginationNext={this.handlePaginationNext}
          handlePaginationPrev={this.handlePaginationPrev}
          {...this.props}
          onChange={this.handleChange}
        />
      );
    }
  };

export default withPaginationFlow;

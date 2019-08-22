import React, { Component } from "react";
import PropTypes from "prop-types";
import StyledPageNum from "./StyledPageNum.jsx";
import StyledPaginationPages from "./StyledPaginationPages.jsx";
import StyledButtonControlArrow from "./StyledButtonControlArrow.jsx";
import ThreePoint from "./ThreePoint.jsx";
import StyledPagination from "./StyledPagination.jsx";
import withPaginationFlow from "../PaginationFlow";

const THREE_POINT = "...";
const END_LIMIT_PADDINGNUM = 3;

class Pagination extends Component {
  static propTypes = {
    isVisible: PropTypes.bool,
    totalCount: PropTypes.number,
    limit: PropTypes.number,
    offset: PropTypes.number,
    simplePaginationLimit: PropTypes.number,
    visibleRange: PropTypes.number.isRequired,
    nearStartBorderNum: PropTypes.number.isRequired,
    isPrevPaginationButtonActive: PropTypes.bool,
    isNextPaginationButtonActive: PropTypes.bool,
    selectedPageNum: PropTypes.number,
    handleChangePagination: PropTypes.func.isRequired,
    handlePaginationNext: PropTypes.func.isRequired,
    handlePaginationPrev: PropTypes.func.isRequired,
  };

  static defaultProps = {
    visibleRange: 2,
    nearStartBorderNum: 3,
    offset: 0,
    limit: 20,
    simplePaginationLimit: 6,
  };

  state = {
    paginationList: [],
  };

  componentDidMount() {
    this.setPaginationList();
  }

  componentDidUpdate(prevProps) {
    const { limit, offset, totalCount } = this.props;

    if (
      limit !== prevProps.limit ||
      totalCount !== prevProps.totalCount ||
      offset !== prevProps.offset
    ) {
      this.setPaginationList();
    }
  }

  setPaginationList() {
    const { totalCount, limit, simplePaginationLimit } = this.props;
    const fullPaginationNumbersLength = Math.ceil(totalCount / limit || 0);

    if (fullPaginationNumbersLength > simplePaginationLimit) {
      this.setState({
        paginationList: this.getCutPagination(fullPaginationNumbersLength),
      });
    } else {
      const pgnList = [];
      for (let i = 0; i < fullPaginationNumbersLength; i++) {
        pgnList.push(i + 1);
      }
      this.setState({ paginationList: pgnList });
    }
  }

  render() {
    const {
      isPrevPaginationButtonActive,
      isNextPaginationButtonActive,
      selectedPageNum,
    } = this.props;
    const { paginationList } = this.state;
    const selectedPaginationNumber = this.props.selectedPageNum;
    const isPaginationShow = paginationList.length > 1;

    return (
      isPaginationShow && (
        <StyledPagination isVisible={this.props.isVisible}>
          <StyledButtonControlArrow
            isVisible={isPrevPaginationButtonActive && selectedPageNum > 1}
            mode={"prev"}
            onClick={this.props.handlePaginationPrev}
          >
            Previous
          </StyledButtonControlArrow>
          <StyledPaginationPages>
            {paginationList.map((item, index) => {
              const isThreePoint = item === THREE_POINT;
              return isThreePoint ? (
                this.getThreePoint(index)
              ) : (
                <StyledPageNum
                  key={index}
                  href="#"
                  onClick={this.handleSelectPagin}
                  data-index={item}
                  active={item == selectedPaginationNumber}
                  data-testid={`pagination-num-${item}`}
                >
                  {item}
                </StyledPageNum>
              );
            })}
          </StyledPaginationPages>
          <StyledButtonControlArrow
            isVisible={isNextPaginationButtonActive}
            mode={"next"}
            onClick={this.props.handlePaginationNext}
          >
            Next
          </StyledButtonControlArrow>
        </StyledPagination>
      )
    );
  }

  getThreePoint(index) {
    return <ThreePoint key={index}>{THREE_POINT}</ThreePoint>;
  }

  handleSelectPagin = event => {
    const { index } = event.currentTarget.dataset;
    this.props.handleChangePagination(Number(index));
  };

  getCutPagination(fullPaginationLength) {
    const { selectedPageNum } = this.props;
    const { nearStartBorderNum } = this.props;
    const paginationList = [selectedPageNum];

    this.fillVisibleRange(paginationList, fullPaginationLength);
    this.fillEndDots(paginationList, fullPaginationLength);
    this.fillStartDots(paginationList);

    if (selectedPageNum === nearStartBorderNum) {
      paginationList.unshift(1);
    }

    return paginationList;
  }

  fillVisibleRange(paginationList, fullPaginationLength) {
    const { selectedPageNum } = this.props;
    const { visibleRange } = this.props;

    for (let i = 1; i < visibleRange; i++) {
      if (selectedPageNum + i <= fullPaginationLength) {
        paginationList.push(selectedPageNum + i);
      }

      if (selectedPageNum > i) {
        paginationList.unshift(selectedPageNum - i);
      }
    }
  }

  fillEndDots(paginationList, fullPaginationLength) {
    const { selectedPageNum } = this.props;
    const limitPadding = END_LIMIT_PADDINGNUM;

    if (selectedPageNum + limitPadding < fullPaginationLength) {
      paginationList.push(THREE_POINT);
      paginationList.push(fullPaginationLength);
    }
  }

  fillStartDots(paginationList) {
    const { selectedPageNum } = this.props;
    const { nearStartBorderNum } = this.props;

    if (selectedPageNum > nearStartBorderNum) {
      paginationList.unshift(THREE_POINT);
      paginationList.unshift(1);
    }
  }
}

export default withPaginationFlow(Pagination);

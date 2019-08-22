import React, { Component } from "react";
import PropTypes from "prop-types";
import Slidee from "./Slidee";
import StyledFrame from "./StyledFrame";

const ITEM_HEIGHT = 129;

export default class Slider extends Component {
  static propTypes = {
    height: PropTypes.number,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
    onUpdateSliderRef: PropTypes.func,
    visibility: PropTypes.bool,
  };

  static defaultProps = {
    height: 516,
    visibility: false,
  };

  state = {
    topIndex: 0,
    activeItemIndex: null,
  };

  constructor(props) {
    super(props);
    this.slidee = React.createRef();
    this.scrollPosition = 0;
  }

  render() {
    const { translateFrom, translateTo, activeItemIndex } = this.state;
    const { visibility, children } = this.props;
    if (!children) {
      return "";
    }
    const cloneChildren = React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        onClick: this.handleClick.bind(this, index),
        active: activeItemIndex === index,
      })
    );

    return visibility ? (
      <StyledFrame height={this.props.height}>
        <Slidee
          ref={node => {
            node && this.props.onUpdateSliderRef(node);
          }}
          translateFrom={translateFrom}
          translateTo={translateTo || 0}
          style={{
            transform: `translateY(${-this.scrollPosition}px)`,
          }}
        >
          {cloneChildren}
        </Slidee>
      </StyledFrame>
    ) : (
      ""
    );
  }

  handleClick(index) {
    const visibleElementsNum = calculateVisibleElementsNum(this.props.height);
    const backItemsNum =
      index + visibleElementsNum - this.props.children.length + 1;
    this.setState({ activeItemIndex: index });
    if (this.state.topIndex + visibleElementsNum === index) {
      this.scrollDown(backItemsNum);
      if (backItemsNum > 0) {
        this.setState({
          topIndex: this.state.topIndex + (visibleElementsNum - backItemsNum),
        });
      } else {
        this.setState({ topIndex: this.state.topIndex + visibleElementsNum });
      }
    } else if (this.state.topIndex > 0 && this.state.topIndex === index) {
      this.scrollUp();
      const topIndex = this.state.topIndex - visibleElementsNum;
      this.setState({ topIndex: topIndex > 0 ? topIndex : 0 });
    }
  }

  scrollDown(backItemsNum) {
    let stepSize = calculateStepSize(this.props.height);
    if (backItemsNum > 0) {
      stepSize = stepSize - backItemsNum * ITEM_HEIGHT;
    }

    this.setState({ translateFrom: -this.scrollPosition });
    this.setState({ translateTo: -(this.scrollPosition + stepSize) });
    this.scrollPosition += stepSize;
  }

  scrollUp() {
    const stepSize = calculateStepSize(this.props.height);
    this.setState({ translateFrom: -this.scrollPosition });
    const translateTo = -(this.scrollPosition - stepSize);
    this.setState({ translateTo: translateTo > 0 ? 0 : translateTo });
    this.scrollPosition -= stepSize;
    if (this.scrollPosition < 0) {
      this.scrollPosition = 0;
    }
  }
}

function calculateVisibleElementsNum(height) {
  return Math.floor(height / ITEM_HEIGHT);
}

function calculateStepSize(height) {
  return calculateVisibleElementsNum(height) * ITEM_HEIGHT;
}

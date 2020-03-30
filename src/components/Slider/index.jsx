import React, { Component } from "react";
import PropTypes from "prop-types";
import Slidee from "./Slidee";
import StyledFrame from "./StyledFrame";

export class Slider extends Component {
  static propTypes = {
    height: PropTypes.number,
    totalItemHeight: PropTypes.number,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
    onUpdateSliderRef: PropTypes.func,
    visibility: PropTypes.bool,
  };

  static defaultProps = {
    height: 516,
    totalItemHeight: 129,
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

  handleClick(index, childKey) {
    const { topIndex } = this.state;
    const { height, totalItemHeight } = this.props;
    const visibleElementsNum = calculateVisibleElementsNum(
      height,
      totalItemHeight
    );
    const backItemsNum =
      index + visibleElementsNum - this.props.children.length + 1;

    this.setState({ activeItemIndex: childKey });

    /**
     * Клик по нижнему видимому элементу
     * приводит к скорллу слайдера вниз
     */
    if (topIndex + visibleElementsNum === index) {
      this.scrollDown(backItemsNum);

      if (backItemsNum > 0) {
        this.setState({
          topIndex: topIndex + (visibleElementsNum - backItemsNum),
        });
      } else {
        this.setState({ topIndex: topIndex + visibleElementsNum });
      }
    } else if (topIndex > 0 && topIndex === index) {
      /**
       * Клик по верхнему видимому элементу
       * приводит к скорллу слайдера вверх
       */
      this.scrollUp();
      const newTopIndex = topIndex - visibleElementsNum;
      this.setState({ topIndex: newTopIndex > 0 ? newTopIndex : 0 });
    }
  }

  scrollDown(backItemsNum) {
    const { height, totalItemHeight } = this.props;
    let stepSize = calculateStepSize(height, totalItemHeight);

    if (backItemsNum > 0) {
      stepSize = stepSize - backItemsNum * totalItemHeight;
    }

    this.setState({ translateFrom: -this.scrollPosition });
    this.setState({ translateTo: -(this.scrollPosition + stepSize) });

    this.scrollPosition += stepSize;
  }

  scrollUp() {
    const { height, totalItemHeight } = this.props;
    const stepSize = calculateStepSize(height, totalItemHeight);
    this.setState({ translateFrom: -this.scrollPosition });
    const translateTo = -(this.scrollPosition - stepSize);
    this.setState({ translateTo: translateTo > 0 ? 0 : translateTo });
    this.scrollPosition -= stepSize;

    if (this.scrollPosition < 0) {
      this.scrollPosition = 0;
    }
  }

  render() {
    const { translateFrom, translateTo, activeItemIndex } = this.state;
    const { visibility, children } = this.props;
    if (!children) {
      return "";
    }
    const cloneChildren = React.Children.map(children, (child, index) => {
      const childKey = child.key || index;

      return React.cloneElement(child, {
        onClick: () => {
          this.handleClick(index, childKey);
        },
        active: activeItemIndex === childKey,
      });
    });

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
    ) : null;
  }
}

function calculateVisibleElementsNum(height, itemHeight) {
  return Math.floor(height / itemHeight);
}

function calculateStepSize(height, itemHeight) {
  return calculateVisibleElementsNum(height, itemHeight) * itemHeight;
}

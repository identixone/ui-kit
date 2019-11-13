import React from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "styled-components";
import { StyledCardSmall } from "./StyledCardSmall";
import { CardSmallImage } from "./CardSmallImage";
import { CardSmallData, CardSmallDataItem } from "./CardSmallData";
import { CardSmallButton } from "./CardSmallButton";
import { CardSmallCheckbox } from "./CardSmallCheckbox";

function CardSmall(props) {
  const {
    theme,
    "data-testid": testId,
    onClick,
    onMouseOver,
    onMouseLeave,
    children,
    className,
  } = props;

  const hasImg = Object.prototype.hasOwnProperty.call(props, "img");

  return (
    <ThemeProvider theme={{ theme }}>
      <StyledCardSmall
        className={className}
        onClick={onClick}
        data-testid={testId}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        hasImg={hasImg}
      >
        {hasImg ? <CardSmallImage src={props.img} /> : null}

        {children}
      </StyledCardSmall>
    </ThemeProvider>
  );
}

CardSmall.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]),
  "data-testid": PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.node,
    PropTypes.func,
  ]),
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseLeave: PropTypes.func,
  img: PropTypes.string,
  className: PropTypes.string,
};

CardSmall.defaultProps = {
  theme: "light",
};

CardSmall.Data = CardSmallData;
CardSmall.DataItem = CardSmallDataItem;
CardSmall.Button = CardSmallButton;
CardSmall.Checkbox = CardSmallCheckbox;

export {
  CardSmall,
  StyledCardSmall,
  CardSmallImage,
  CardSmallData,
  CardSmallButton,
  CardSmallDataItem,
};

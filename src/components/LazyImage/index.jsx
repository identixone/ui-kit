import React from "react";
import PropTypes from "prop-types";

import { useState, useEffect } from "react";

import { StyledLazyImage } from "./StyledLazyImage";

export function LazyImage({
  children,
  className,
  onLoad,
  "data-testid": testId,
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (onLoad && isLoaded) {
      onLoad();
    }
  }, [isLoaded]);

  function handleImageLoaded() {
    if (!isLoaded) {
      setIsLoaded(true);
    }
  }

  return (
    <StyledLazyImage
      className={className}
      data-testid={testId}
      isImageLoaded={isLoaded}
    >
      {React.cloneElement(children, {
        onLoad: handleImageLoaded,
      })}
    </StyledLazyImage>
  );
}

LazyImage.propTypes = {
  className: PropTypes.string,
  "data-testid": PropTypes.string,
  onLoad: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
};

LazyImage.defaultProps = {
  "data-testid": "lazy-image",
};

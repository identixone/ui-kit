import React from "react";
import PropTypes from "prop-types";

import { useState, useEffect } from "react";

import { StyledLazyImage } from "./StyledLazyImage";

export function LazyImage({
  src,
  children,
  className,
  onLoad,
  "data-testid": testId,
  imgRef,
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (onLoad && isLoaded) {
      onLoad();
    }
  }, [isLoaded]);

  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  function handleImageLoaded() {
    if (!isLoaded) {
      setIsLoaded(true);
    }
  }

  /**
   * Случай, когда изображение берется из кэша
   */
  useEffect(() => {
    if (imgRef && imgRef.current) {
      if (!isLoaded && imgRef.current.complete) {
        setIsLoaded(true);
      }
    }
  }, [imgRef]);

  return (
    <StyledLazyImage className={className} isImageLoaded={isLoaded}>
      {children ? (
        React.cloneElement(children, {
          onLoad: handleImageLoaded,
        })
      ) : (
        <img
          src={src}
          onLoad={handleImageLoaded}
          data-testid={testId}
          ref={imgRef}
        />
      )}
    </StyledLazyImage>
  );
}

LazyImage.propTypes = {
  src: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  className: PropTypes.string,
  onLoad: PropTypes.func,
  "data-testid": PropTypes.string,
  imgRef: PropTypes.object,
};

LazyImage.defaultProps = {
  "data-testid": "lazy-image",
};

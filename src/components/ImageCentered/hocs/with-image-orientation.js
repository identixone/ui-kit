import React from "react";
import PropTypes from "prop-types";

import { useEffect, useRef, useState } from "react";

function getImageOrientation(img) {
  const width = img.naturalWidth || img.width;
  const height = img.naturalHeight || img.height;

  return height > width ? "portrait" : "landscape";
}

export function withImageOrientation(Component) {
  function WithImageOrientation(props) {
    const [imgOrientation, setImgOrientation] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
      if (isLoaded && imgRef.current) {
        setImgOrientation(getImageOrientation(imgRef.current));
      }
    }, [isLoaded]);

    return (
      <Component
        {...props}
        imgOrientation={imgOrientation}
        imgRef={imgRef}
        onLoad={() => {
          props.onLoad && props.onLoad();
          setIsLoaded(true);
        }}
      />
    );
  }

  WithImageOrientation.propTypes = {
    onLoad: PropTypes.func,
  };

  return WithImageOrientation;
}

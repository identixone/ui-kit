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

        if (props.onLoad) {
          props.onLoad();
        }
      }
    }, [isLoaded]);

    useEffect(() => {
      setIsLoaded(false);
    }, [props.src]);

    return (
      <Component
        {...props}
        imgOrientation={imgOrientation}
        imgRef={imgRef}
        onLoad={() => {
          if (!isLoaded) {
            setIsLoaded(true);
          }
        }}
      />
    );
  }

  WithImageOrientation.propTypes = {
    onLoad: PropTypes.func,
    src: PropTypes.string,
  };

  return WithImageOrientation;
}

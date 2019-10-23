import React from "react";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";

import StyledUploadPlace from "./StyledUploadPlace";
import StyledUploadInput from "./StyledUploadInput";
import StyledUploadTarget from "./StyledUploadTarget";

const imagesAcceptMimeTypes = [
  ".png",
  ".PNG",
  ".jpg",
  ".JPG",
  ".jpeg",
  ".JPEG",
];

export function FiltersUploadPhoto({
  render,
  onUpload,
  isLockDrop,
  isLockUpload,
}) {
  function handleChangeUploadInput(e) {
    onUpload(e.currentTarget.files);
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onUpload,
    disabled: isLockUpload,
    maxSize: 4096000,
    multiple: false,
    accept: imagesAcceptMimeTypes,
    "data-testid": "upload-photo-dropzone",
  });

  return (
    <React.Fragment>
      <StyledUploadPlace
        isDragActive={isDragActive}
        data-testid={"upload-place"}
        {...getRootProps()}
      >
        <StyledUploadTarget
          isLockDrop={isLockDrop}
          isLockUpload={isLockUpload}
          data-testid="upload-target"
        >
          {render()}
        </StyledUploadTarget>
      </StyledUploadPlace>
      <StyledUploadInput
        data-testid={"upload-input"}
        disabled={isLockUpload}
        {...getInputProps()}
        onChange={handleChangeUploadInput}
      />
    </React.Fragment>
  );
}

FiltersUploadPhoto.propTypes = {
  render: PropTypes.func.isRequired,
  onUpload: PropTypes.func,
  isLockDrop: PropTypes.bool,
  isLockUpload: PropTypes.bool,
};

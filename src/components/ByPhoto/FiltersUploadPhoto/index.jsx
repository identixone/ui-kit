import React from "react";
import PropTypes from "prop-types";
import Dropzone from "react-dropzone";

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
  handleUploadFile,
  isLockDrop,
  isLockUpload,
}) {
  function handleDrop(acceptedFiles) {
    handleUploadFile(acceptedFiles);
  }

  function handleChangeUploadInput(e) {
    handleUploadFile(e.currentTarget.files);
  }

  return (
    (
      <Dropzone
        onDrop={handleDrop}
        disabled={isLockUpload}
        maxSize={4096000}
        multiple={false}
        accept={imagesAcceptMimeTypes}
      >
        {({ getRootProps, getInputProps, isDragActive }) => {
          return (
            <React.Fragment>
              <StyledUploadPlace
                isDragActive={isDragActive}
                {...getRootProps()}
              >
                <StyledUploadTarget
                  isLockDrop={isLockDrop}
                  isLockUpload={isLockUpload}
                >
                  {render()}
                </StyledUploadTarget>
              </StyledUploadPlace>
              <StyledUploadInput
                {...getInputProps()}
                onChange={handleChangeUploadInput}
              />
            </React.Fragment>
          );
        }}
      </Dropzone>
    ) || ""
  );
}

FiltersUploadPhoto.propTypes = {
  render: PropTypes.func.isRequired,
  handleUploadFile: PropTypes.func,
  isLockDrop: PropTypes.bool,
  isLockUpload: PropTypes.bool,
};

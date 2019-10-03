import React, { Component } from "react";
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
  handleDrop,
  handleUploadFile,
  isLockDrop,
  isLockUpload,
}) {

  function handleDrop (acceptedFiles) {
    handleUploadFile(acceptedFiles);
  }

  function handleUploadFile (e) {
    handleUploadFile(e.currentTarget.files);
  }

  return (
    (
      <div onClick={handleOpenUploadSelection}>
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
                  onChange={handleUploadFile}
                />
              </React.Fragment>
            );
          }}
        </Dropzone>
      </div>
    ) || ""
  );
}

FiltersUploadPhoto.propTypes = {
  render: PropTypes.func.isRequired,
  handleDrop: PropTypes.func,
  handleUploadFile: PropTypes.func,
  isLockDrop: PropTypes.bool,
  isLockUpload: PropTypes.bool,
};

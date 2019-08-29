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

export class FiltersUploadPhoto extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    handleDrop: PropTypes.func,
    handleUploadFile: PropTypes.func,
    isLockDrop: PropTypes.bool,
    isLockUpload: PropTypes.bool,
  };

  handleDrop = acceptedFiles => {
    this.props.handleUploadFile(acceptedFiles);
  };

  handleUploadFile = e => {
    this.props.handleUploadFile(e.currentTarget.files);
  };

  render() {
    return (
      (
        <div onClick={this.handleOpenUploadSelection}>
          <Dropzone
            onDrop={this.handleDrop}
            disabled={this.props.isLockUpload}
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
                      isLockDrop={this.props.isLockDrop}
                      isLockUpload={this.props.isLockUpload}
                    >
                      {this.props.render()}
                    </StyledUploadTarget>
                  </StyledUploadPlace>
                  <StyledUploadInput
                    {...getInputProps()}
                    onChange={this.handleUploadFile}
                  />
                </React.Fragment>
              );
            }}
          </Dropzone>
        </div>
      ) || ""
    );
  }
}

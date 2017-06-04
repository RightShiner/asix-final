import React from 'react';
import axios from 'axios';
import { API_DOMAIN } from '../../helpers/apiCredentials';
import { bindAll } from 'lodash';

class ImageUploader extends React.Component {
  constructor() {
    super();
    this.state = {
      data_uri: null,
      processing: false
    };

    bindAll(this, 'handleFile', 'handleSubmit');
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      processing: true
    });

    const promise = axios({
      url: `${API_DOMAIN}/api/upload/image`,
      method: 'POST',
      data: {
        data_uri: this.state.data_uri,
        filename: this.state.filename,
        filetype: this.state.filetype
      }
    });

    promise.then(() => {
      this.setState({
        processing: false,
        uploaded_uri: `alsbuckets3.s3.amazonaws.com/${this.state.filename}`
      });
    });
  }

  handleFile(e) {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onload = (upload) => {
      this.setState({
        data_uri: upload.target.result,
        filename: file.name,
        filetype: file.type
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let processing = '';
    let uploaded = '';

    if (this.state.uploaded_uri) {
      uploaded = (
        <div>
          <h4>Image uploaded!</h4>
          <img className="image-preview" src={this.state.uploaded_uri} />
          <pre className="image-link-box">{this.state.uploaded_uri}</pre>
        </div>
      );
    }

    if (this.state.processing) {
      processing = 'Processing image, hang tight';
    }

    return (
      <div className="row">
        <div className="col-sm-12">
          <label>Upload an image</label>
          <form onSubmit={this.handleSubmit} encType="multipart/form-data">
            <input type="file" onChange={this.handleFile} />
            <input disabled={this.state.processing} className="btn btn-primary" type="submit" value="Upload" />
            {processing}
          </form>
          {uploaded}
        </div>
      </div>
    );
  }
}

export default ImageUploader;

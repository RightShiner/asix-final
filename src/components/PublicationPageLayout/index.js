import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { bindAll } from 'lodash';

import { API_DOMAIN } from '../../helpers/apiCredentials';
import { Button, Col, FormGroup, Form, FormControl, ControlLabel, textarea } from 'react-bootstrap';

import styles from './styles.scss';

class PublicationPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data_uri: null,
      processing: false
    };

    bindAll(this, 'handleFile');
  }

  publish() {
    if ('undefined' !== typeof this.state.data_uri) {
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
          uploaded_uri: `https://alsbuckets3.s3.amazonaws.com/${this.state.filename}`
        });
        this.props.sendPublication(this.state.uploaded_uri);
      });
    } else {
      this.props.sendPublication();
    }
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
    return (
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.formWrapper}>
          <Form horizontal>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                Título
              </Col>
              <Col sm={10}>
                <FormControl
                id="formControlsTitle"
                type="text"
                placeholder="Escribir título"
                onChange={(event) => this.props.setTitle(event.target.value)}
                value={this.props.title}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                Descripción
              </Col>
              <Col sm={10}>
                <textarea
                id="formControlsDescription"
                type="text"
                placeholder="Escribir una descripción"
                onChange={(event) => this.props.setDescription(event.target.value)}
                value={this.props.description}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                <input className={styles.botonSubir} type="file" onChange={this.handleFile} />
              </form>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button onClick={() => this.publish()}>
                  Publicar
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

PublicationPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setTitle: PropTypes.func,
  setDescription: PropTypes.func,
  sendPublication: PropTypes.func,
};

export default PublicationPage;

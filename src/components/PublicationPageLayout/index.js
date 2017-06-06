import React from 'react';
import { Button, Col, FormGroup, Form, FormControl, ControlLabel, textarea } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const PublicationPage = (props) => (
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
            onChange={(event) => props.setTitle(event.target.value)}
            value={props.title}
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
            onChange={(event) => props.setDescription(event.target.value)}
            value={props.description}
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button onClick={() => props.sendPublication()}>
              Publicar
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  </div>
);

PublicationPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setTitle: PropTypes.func,
  setDescription: PropTypes.func,
  sendPublication: PropTypes.func,
};

export default PublicationPage;

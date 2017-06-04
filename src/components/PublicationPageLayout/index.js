import React from 'react';
import { Button, Col, FormGroup, Form, FormControl, ControlLabel } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PublicationPage = (props) => (

  <Form horizontal>
    <FormGroup>
      <Col componentClass={ControlLabel} sm={2}>
        Title
      </Col>
      <Col sm={10}>
        <FormControl
        id="formControlsTitle"
        type="text"
        label="Title"
        placeholder="Enter title"
        onChange={(event) => props.setTitle(event.target.value)}
        value={props.title}
        />
      </Col>
    </FormGroup>      
    <FormGroup>
      <Col componentClass={ControlLabel} sm={2}>
        description
      </Col>
      <Col sm={10}>
        <FormControl
        id="formControlsDescription"
        type="text"
        label="description"
        placeholder="Enter description"
        onChange={() => console.log("description")}
        value="{this.state.description}"
        />
      </Col>
    </FormGroup>
  
    /* -----------FALTA LA PARTE DE SUBIR UN ARCHIVO----------- */
  
    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button onClick={(event) => "this.onClickSendPost(event)"}>
          Submit
        </Button>
      </Col>
    </FormGroup>
  </Form>
);

PublicationPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  setTitle: PropTypes.func,
};

export default PublicationPage;

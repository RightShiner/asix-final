import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Col, FormControl, ControlLabel, Button } from 'react-bootstrap';

import styles from './styles.scss';

const SigninPage = (props) => (
  <div className="container">
    <div className={styles.formWrapper}>
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl
            type="email"
            placeholder="Email"
            onChange={(event) => props.onChangeUser(event.target.value)}
            value={props.user}
            required
            />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl
            type="password"
            placeholder="Password"
            onChange={(event) => props.onChangePass(event.target.value)}
            value={props.pass}
            required
            />
          </Col>
        </FormGroup>
        {
          ('' !== props.error) && (
            <p style={{ color: 'red' }}>{props.error}</p>
          )
        }
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button onClick={() => props.setUser(props.user, props.pass)}>
              Sign in
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  </div>
);

SigninPage.propTypes = {
  setUser: PropTypes.func.isRequired,
  onChangePass: PropTypes.func.isRequired,
  onChangeUser: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

export default SigninPage;


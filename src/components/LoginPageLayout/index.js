import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Col, FormControl, ControlLabel, Button } from 'react-bootstrap';
import isEmpty from 'lodash/isEmpty';
import trim from 'lodash/trim';
import store from 'store';

import { getUser } from 'actions/LoginPageActions';

import styles from './styles.scss';

export default class LoginPage extends React.Component {

  static contextTypes = { router: PropTypes.object.isRequired };

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabledLogin: true,
      error: '',
    };
    this.onClickLogin = this.onClickLogin.bind(this);
    this.onClickSignup = this.onClickSignup.bind(this);
  }

  onClickLogin(event) {
    event.preventDefault();
    this.setState({ disabledLogin: true });
    if (
        (!isEmpty(this.state.password)) &&
        (!isEmpty(this.state.email))
       ) {
      store.dispatch(getUser({
        email: trim(this.state.email),
        password: trim(this.state.password),
      }));
      this.setState({
        email: '',
        password: '',
        disabledLogin: true,
        error: '',
      });
    } else {
      this.setState({
        disabledLogin: false,
        error: 'Por favor, complete todos los campos',
      });
    }
  }

  onClickSignup(event) {
    event.preventDefault();
    this.context.router.push('/signup');
  }

  render() {
    return (
      <div className={`container ${styles.wrapper}`}>
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
                onChange={(event) => {
                  this.setState({
                    error: '',
                    email: event.target.value,
                  });
                  if (!isEmpty(this.state.email) && !isEmpty(this.state.password)) {
                    this.setState({ disabledSignup: false });
                  }
                }
                }
                value={this.state.email}
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
                onChange={(event) => {
                  this.setState({
                    error: '',
                    password: event.target.value,
                  });
                  if (!isEmpty(this.state.password) && !isEmpty(this.state.email)) {
                    this.setState({ disabledSignup: false });
                  }
                }}
                value={this.state.password}
                />
              </Col>
            </FormGroup>
            {
              (!isEmpty(this.state.error)) && (
                <p className={styles.error}>{this.state.error}</p>
              )
            }
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button disabled={this.state.disabledSignup} onClick={(event) => this.onClickLogin(event)}>
                  Log in
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

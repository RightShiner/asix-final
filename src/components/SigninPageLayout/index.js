import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Col, FormControl, ControlLabel, Button } from 'react-bootstrap';
import isEmpty from 'lodash/isEmpty';
import trim from 'lodash/trim';
import store from 'store';

import { setUser } from 'actions/SigninPageActions';
import { notificationAdd } from 'actions/NotificationActions';

import styles from './styles.scss';

export default class SignupPage extends React.Component {
  static contextTypes = { router: PropTypes.object.isRequired };

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabledSignup: true,
      error: '',
    };
    this.onClickLogin = this.onClickLogin.bind(this);
    this.onClickSignup = this.onClickSignup.bind(this);
  }

  onClickSignup(event) {
    event.preventDefault();
    this.setState({ disabledSignup: true });
    if (
        (!isEmpty(this.state.password)) &&
        (!isEmpty(this.state.email))
       ) {
      store.dispatch(setUser({
        email: trim(this.state.email),
        password: trim(this.state.password),
      }))
      .then(() => {
        this.context.router.push('/login');
      });
    } else {
      this.setState({
        disabledSignup: false,
        error: 'credenciales incorrectas',
      });
    }
  }

  onClickLogin(event) {
    event.preventDefault();
    this.context.router.push('/login');
  }

  render() {
    return (
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
                <p style={{ color: 'red' }}>{this.state.error}</p>
              )
            }
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button disabled={this.state.disabledSignup} onClick={(event) => this.onClickSignup(event)}>
                  Sign in
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

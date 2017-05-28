import React from 'react';
import PropTypes from 'prop-types';
import LoginPageLayout from '../components/LoginPageLayout';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LoginPageActions from '../actions/LoginPageActions';

class LoginPage extends React.Component {
  static propTypes = {
    reset: PropTypes.func.isRequired,
  }
  componentWillUnmount() {
    this.props.reset();
  }

  render() {
    return (
      <LoginPageLayout {...this.props} />
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.loginPage.user,
  pass: state.loginPage.pass,
  error: state.loginPage.error,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    ...LoginPageActions,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

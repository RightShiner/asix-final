import React from 'react';
import LoginPageLayout from '../components/LoginPageLayout/LoginPageLayout';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LoginPageActions from '../actions/LoginPageActions';

class LoginPage extends React.Component {
  render() {
    return (
      <LoginPageLayout {...this.props} />
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.loginPage.user,
  pass: state.loginPage.pass,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    ...LoginPageActions,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

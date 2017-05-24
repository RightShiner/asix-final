import React from 'react';
import SigninPageLayout from '../components/SigninPageLayout/SigninPageLayout';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SigninPageActions from '../actions/SigninPageActions';

class SigninPage extends React.Component {
  render() {
    return (
      <SigninPageLayout {...this.props} />
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.signinPage.user,
  pass: state.signinPage.pass,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    ...SigninPageActions,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SigninPage);

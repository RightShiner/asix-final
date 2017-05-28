import React from 'react';
import PropTypes from 'prop-types';
import SigninPageLayout from '../components/SigninPageLayout';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SigninPageActions from '../actions/SigninPageActions';

class SigninPage extends React.Component {
  static propTypes = {
    reset: PropTypes.func.isRequired,
  }
  componentWillUnmount() {
    this.props.reset();
  }

  render() {
    return (
      <SigninPageLayout {...this.props} />
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.signinPage.user,
  pass: state.signinPage.pass,
  error: state.signinPage.error,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    ...SigninPageActions,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SigninPage);

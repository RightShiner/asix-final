import React from 'react';
import PropTypes from 'prop-types';
import HomePageLayout from '../components/HomePageLayout';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HomePageActions from '../actions/HomePageActions';
import * as LoginPageActions from '../actions/LoginPageActions';

class HomePage extends React.Component {
  static propTypes = {
    getUsername: PropTypes.func.isRequired,
    getPublications: PropTypes.func.isRequired,
    isLogged: PropTypes.bool.isRequired,
    id: PropTypes.string,
  };

  componentDidMount() {
    if (this.props.isLogged) {
      this.props.getUsername(this.props.id);
    }
    this.props.getPublications();
  }

  render() {
    return (
      <HomePageLayout {...this.props} />
    );
  }
}


const mapStateToProps = (state) => ({
  isLogged: state.userState.isLogged,
  id: state.userState.id,
  publications: state.homeState.publications,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    ...HomePageActions,
    ...LoginPageActions,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

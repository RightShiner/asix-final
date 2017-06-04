import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as LoginPageActions from 'actions/LoginPageActions';
import * as types from 'actions/action-types';
import Menu from 'components/Menu';
import Footer from 'components/Footer';
import PublicationPageLayout from 'components/PublicationPageLayout';
import NotificationContainer from 'components/Notifications';
import store from 'store';

class Main extends React.Component {

  componentDidMount() {
    store.dispatch({ type: types.RESET });
  }

  render() {
    return (
      <div>
        <Menu {...this.props} />
          <NotificationContainer />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.userState.isLogged,
  username: state.userState.username,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    ...LoginPageActions,
  }, dispatch)
});

Main.propTypes = {
  children: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

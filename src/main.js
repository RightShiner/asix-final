import React from 'react';
import PropTypes from 'prop-types';

import * as types from 'actions/action-types';
import Menu from 'components/Menu';
import Footer from 'components/Footer';
import NotificationContainer from 'components/Notifications';
import store from 'store';

class Main extends React.Component {

  componentDidMount() {
    store.dispatch({ type: types.RESET });
  }

  render() {
    return (
      <div>
        <Menu />
          <NotificationContainer />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Main;

import React from 'react';
import PropTypes from 'prop-types';

import Menu from 'components/Menu';
import Footer from 'components/Footer';

class Main extends React.Component {

  render() {
    return (
      <div>
        <Menu />
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

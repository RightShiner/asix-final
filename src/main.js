import React from 'react';
import PropTypes from 'prop-types';

class Main extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Main;

import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const HomePage = () => (
  <div className={styles.menuWrapper}>
    Home Page
  </div>
);

HomePage.propTypes = {
  user: PropTypes.string,
};

export default HomePage;

import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';

import ImageUploader from '../ImageUploader';
import Card from '../Card';

// import styles from './styles.scss';

const HomePage = (props) => (
  <div>
    <ImageUploader />
    <div>
      {
        !isEmpty(props.publications) && (
          map(props.publications, (publication, key) => (
            <Card
              key={key}
              publication={publication}
            />
          ))
        )
      }
    </div>
  </div>
);

HomePage.propTypes = {
  user: PropTypes.string,
  publications: PropTypes.object,
};

export default HomePage;

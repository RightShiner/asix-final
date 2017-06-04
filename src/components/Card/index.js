import React from 'react';
import PropTypes from 'prop-types';

// import styles from './styles.scss';

const Card = (props) => (
  <span>
    <div>
      <h1>{ props.publication.title }</h1>
    </div>
    <div>
      <p>{ props.publication.body }</p>
    </div>
  </span>
);

Card.propTypes = {
  publication: PropTypes.object,
};

export default Card;

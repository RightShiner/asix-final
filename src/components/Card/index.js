import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Card = (props) => (
  <div className={styles.wrapper}>
    <div className={styles.header}>
      <p className={styles.nombre}>{props.publication.user.username}</p>
    </div>
    <div className={styles.image}>
      <img className={styles.image} src={props.publication.image} alt={props.publication.title} />
    </div>
    <div className={styles.description}>
      <h1 className={styles.title}>{ props.publication.title }</h1>
      <p><b>{props.publication.user.username}</b>{` ${props.publication.description}`}</p>
    </div>
    <div className={styles.date}>
      <h6><b>{`${props.publication.creationDate} a las ${props.publication.creationTime}`}</b></h6>
    </div>
  </div>
);

Card.propTypes = {
  publication: PropTypes.object.isRequired,
};

export default Card;

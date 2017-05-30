import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

import styles from './styles.scss';


const MenuLayout = (props) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Home</Link>
      </Navbar.Brand>
    </Navbar.Header>
    {
      (props.isLogged) ? (
        <Nav className={styles.navWrapper}>
          <p className={styles.navbarItems}>Bienvenido, {props.username}</p>
          <a className={`${styles.navbarItems} ${styles.navButton}`} bsStyle="link" onClick={(event) => {
            event.preventDefault();
            props.onLogout();
          }}>
            Logout
          </a>
        </Nav>
      ) :
      (
        <Nav style={{ float: 'right' }}>
          <NavItem eventKey={1} href="#/login">Login</NavItem>
          <NavItem eventKey={2} href="#/signup">Signup</NavItem>
        </Nav>
      )
    }
  </Navbar>
);

MenuLayout.propTypes = {
  username: PropTypes.string,
  isLogged: PropTypes.bool.isRequired,
  onLogout: PropTypes.function,
};

export default MenuLayout;

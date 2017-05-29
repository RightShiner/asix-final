import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Navbar, NavItem, Nav } from 'react-bootstrap';


const Menu = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Home</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav style={{ float: 'right' }}>
      <NavItem eventKey={1} href="#/login">Login</NavItem>
      <NavItem eventKey={2} href="#/signup">Signin</NavItem>
    </Nav>
  </Navbar>
);

Menu.propTypes = {
  user: PropTypes.string,
};

export default Menu;

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = props => (
  <li >
    <NavLink style = {{fontSize: "12px"}} activeClassName={'current'} {...props} />
  </li>
);

export default NavItem;

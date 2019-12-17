import React from 'react';
import AppBar from 'material-ui/AppBar';
import { navbarStyles } from './navbar.styles';

const NavBar = () => (
  <AppBar
    title="Spectrum Global - Members & Events Listing"
    style={navbarStyles}
    showMenuIconButton={false}
  />
);

export default NavBar;

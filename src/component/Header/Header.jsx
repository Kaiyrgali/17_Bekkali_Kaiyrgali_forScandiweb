import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Actions from '../Actions';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <Navigation />
      <Link to="/">
        <img
          className="logo"
          src="../a-logo.svg" 
          alt="logo"
          title="Back to Category"
        />
      </Link>
      <Actions />
    </header>
  );
}

export default Header;

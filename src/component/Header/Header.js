import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Actions from '../Actions'
import './Header.scss'

function Header() {
  return (
    <div className = "header">
      <Navigation />
      <Link to="/">
        <img src='a-logo.svg' width="41" alt="logo" title="Back to Category" ></img>
      </Link>
      
      <Actions />
    </div>  
  );
}

export default Header;
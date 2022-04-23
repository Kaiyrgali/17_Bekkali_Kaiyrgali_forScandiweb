import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation-Item.scss'


function NavigationItem({name}) {

  const url = `/category/${name}`

  return (
    <Link to={url}
          className='header__navigation-item'
    >
      {name}
    </Link>
  );
}

export default NavigationItem;
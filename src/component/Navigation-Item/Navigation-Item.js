import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation-Item.scss'


function NavigationItem(category, onCategory) {
  console.log(category, onCategory);
  return (
      <Link to="#"
            className='header__navigation-item'
            onClick={(e)=>onCategory(e)}>
        {category.name}
      </Link>
  );
}

export default NavigationItem;
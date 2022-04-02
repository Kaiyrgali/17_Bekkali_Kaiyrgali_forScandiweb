import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Navigation-Item.scss'


function NavigationItem(category) {
  console.log(category);
  // const navigate = useNavigate();
  // const gotoArchivePage = () => { navigate(`/archive/${ID}`); }
  let url = `/${category.name}`
    // console.log(url);

  return (
    <Link to={url}
          className='header__navigation-item'
          // onClick={(e)=>onCategory(e)}
          >
      {category.name}
    </Link>
  );
}

export default NavigationItem;
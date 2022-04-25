import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationItem.scss';

function NavigationItem({ name }) {
  const url = `/category/${name}`;

  return (
    <Link
      to={url}
      className="navigation-item"
    >
      {name}
    </Link>
  );
}

export default NavigationItem;

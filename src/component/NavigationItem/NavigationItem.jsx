import React from 'react';
import PropTypes from 'prop-types';
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

NavigationItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NavigationItem;

import React from 'react';
import PropTypes from 'prop-types';
import './Title.scss';

function Title({ category }) {
  const titleText = (!category) ? 'Please choice a category' : category;

  return (
    <h2 className="category">{ titleText }</h2>
  );
}

Title.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Title;

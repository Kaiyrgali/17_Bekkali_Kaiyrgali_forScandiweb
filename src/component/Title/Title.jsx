import React from 'react';
import PropTypes from 'prop-types';
import './Title.scss';

function Title({ category }) {
  const titleText = (category === 'none') ? 'Please choice a category' : category;

  return (
    <h2 className="category">{ titleText }</h2>
  );
}

Title.propTypes = {
  category: PropTypes.string,
};

Title.defaultProps = {
  category: 'none',
};

export default Title;

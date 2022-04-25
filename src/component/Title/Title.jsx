import React from 'react';

import './Title.scss';

function Title({ category }) {
  const titleText = (!category) ? 'Please choice a category' : category;

  return (
    <h2 className="category">{ titleText }</h2>
  );
}

export default Title;
